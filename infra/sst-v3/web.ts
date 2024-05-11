import { api } from "./api";

export const web = new sst.aws.Nextjs("Web", {
  path: "apps/web",
  environment: {
    GRAPHQL_API_URL: api.url,
  },
});
