// import { GraphQLApi, StackContext } from "sst/constructs";

// export function API({ stack }: StackContext) {
//   // Create the GraphQL API
//   const api = new GraphQLApi(stack, "ApolloApi", {
//     server: {
//       handler: "apps/api/lambda.ts",
//       nodejs: {
//         format: "cjs",
//       },
//     },
//   });

//   // Show the API endpoint in output
//   stack.addOutputs({
//     ApiEndpoint: api.url,
//   });
// }
