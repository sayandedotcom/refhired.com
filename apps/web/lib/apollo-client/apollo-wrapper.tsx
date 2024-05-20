"use client";

import { ApolloLink, HttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import {
  ApolloNextAppProvider,
  NextSSRApolloClient,
  NextSSRInMemoryCache,
  SSRMultipartLink,
} from "@apollo/experimental-nextjs-app-support/ssr";
import { readSSROnlySecret } from "ssr-only-secrets";

const getAuthLink = (cloakedSessionId: Promise<string>) =>
  setContext(async (_, { headers }) => {
    const sessionId = await readSSROnlySecret(
      // @ts-ignore
      await cloakedSessionId,
      "SECRET_KEY_VAR"
    );

    console.log(
      "2st Console run======================================================================================================================================"
    );

    if (sessionId) {
      return {
        headers: {
          ...(headers || {}),
          Cookie: `sessionid=${sessionId}`,
          // ...headers,
          // authorization: sessionId ? `Bearer from wrapper ${sessionId}` : "",
        },
      };
    }

    return { headers };
  });

export function ApolloWrapper({
  children,
  sessionId,
}: React.PropsWithChildren<{ sessionId: Promise<string> }>) {
  function makeClient() {
    const httpLink = new HttpLink({
      uri: typeof window === "undefined" ? "http://localhost:8000/graphql" : "http://localhost:8000/graphql",
      fetchOptions: {
        cache: "no-store",
        crendentials: "include",
      },
    });

    console.log(
      "1st Console run======================================================================================================================================"
    );

    return new NextSSRApolloClient({
      cache: new NextSSRInMemoryCache(),
      link:
        typeof window === "undefined"
          ? ApolloLink.from([
              new SSRMultipartLink({
                stripDefer: true,
              }),
              getAuthLink(sessionId),
              httpLink,
            ])
          : httpLink,
    });
  }

  return <ApolloNextAppProvider makeClient={makeClient}>{children}</ApolloNextAppProvider>;
}

// function makeClient() {
//   const httpLink = new HttpLink({
//     uri: "http://localhost:8000/graphql",
//   });

//   const authLink = setContext((_, { headers }) => {
//     const token = getCookie("__Secure-next-auth.session-token") ?? getCookie("next-auth.session-token");

//     console.log("token====================", token);

//     return {
//       headers: {
//         ...headers,
//         authorization: token ? `Bearer ${token}` : "",
//       },
//     };
//   });

//   return new NextSSRApolloClient({
//     cache: new NextSSRInMemoryCache(),
//     link:
//       typeof window === "undefined"
//         ? ApolloLink.from([
//             new SSRMultipartLink({
//               stripDefer: true,
//             }),
//             authLink.concat(httpLink),
//           ])
//         : authLink.concat(httpLink),
//   });
// }

// export function ApolloWrapper({ children }: React.PropsWithChildren) {
//   return <ApolloNextAppProvider makeClient={makeClient}>{children}</ApolloNextAppProvider>;
// }
// ! const appLink = from([errorLink, httpLink]);
// const errorLink = onError(({ graphQLErrors, networkError }) => {
//   if (graphQLErrors) {
//     console.log("graphQLErrorsclient------------------------------", graphQLErrors);
//   }

//   if (networkError) {
//     // handle network error
//     console.log(networkError);
//   }
// });
