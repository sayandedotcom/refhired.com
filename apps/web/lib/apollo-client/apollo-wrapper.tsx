"use client";

import { ApolloLink, HttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import {
  ApolloNextAppProvider,
  NextSSRApolloClient,
  NextSSRInMemoryCache,
  SSRMultipartLink,
} from "@apollo/experimental-nextjs-app-support/ssr";
import { getCookie } from "cookies-next";

function makeClient() {
  const httpLink = new HttpLink({
    uri: "http://localhost:8000/graphql",
  });

  const authLink = setContext((_, { headers }) => {
    const token = getCookie("__Secure-next-auth.session-token") ?? getCookie("next-auth.session-token");

    console.log("token====================", token);

    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : "",
      },
    };
  });

  return new NextSSRApolloClient({
    cache: new NextSSRInMemoryCache(),
    link:
      typeof window === "undefined"
        ? ApolloLink.from([
            new SSRMultipartLink({
              stripDefer: true,
            }),
            authLink.concat(httpLink),
          ])
        : authLink.concat(httpLink),
  });
}

export function ApolloWrapper({ children }: React.PropsWithChildren) {
  return <ApolloNextAppProvider makeClient={makeClient}>{children}</ApolloNextAppProvider>;
}
// const appLink = from([errorLink, httpLink]);
// const errorLink = onError(({ graphQLErrors, networkError }) => {
//   if (graphQLErrors) {
//     console.log("graphQLErrorsclient------------------------------", graphQLErrors);
//   }

//   if (networkError) {
//     // handle network error
//     console.log(networkError);
//   }
// });
