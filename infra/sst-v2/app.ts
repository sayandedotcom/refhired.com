import { Api, NextjsSite, StackContext } from "sst/constructs";

export function APP({ stack }: StackContext) {
  const api = new Api(stack, "ApolloApi");
  api.addRoutes(stack, {
    "POST /graphql": {
      type: "graphql",
      function: {
        handler: "apps/api/lambda.handler",
      },
    },
  });

  const site = new NextjsSite(stack, "Site", {
    path: "apps/web",
    bind: [api],
    dev: {
      url: "http://localhost:3000",
    },
    buildCommand: "yarn build",
    environment: {
      GRAPHQL_API_URL: api.url + "/graphql",
    },
  });

  stack.addOutputs({
    SiteUrl: site.url,
    ApiEndpoint: api.url,
  });
}
