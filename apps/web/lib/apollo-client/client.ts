import { cookies } from "next/headers";

import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc";

const httpLink = createHttpLink({
  uri: "http://localhost:8000/graphql",
  credentials: "include",
  fetchOptions: { cache: "no-store" },
});

const authLink = setContext((_, { headers }) => {
  const cookieStore = cookies();
  const token =
    cookieStore.get("__Secure-next-auth.session-token") ?? cookieStore.get("next-auth.session-token");

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token.value}` : "",
    },
  };
});

export const { getClient } = registerApolloClient(() => {
  return new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });
});

// export const { getClient } = registerApolloClient(() => {
//   return new ApolloClient({
//     cache: new InMemoryCache(),
//     link: new HttpLink({
//       uri: "http://localhost:8000/graphql",
//       credentials: "include",
//       fetchOptions: { cache: "no-store" },
//     }),
//   });
// });
