export const api = new sst.aws.ApiGatewayV2("Api", {
  url: true,
  // link: [database],
  // handler: "../../apps/api/lambda.handler",
});
api.route("POST /graphql", {
  // link: [bucket],
  handler: "../../apps/api/lambda.handler",
});
