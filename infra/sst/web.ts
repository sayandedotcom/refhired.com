import { api } from "./api";

export const web = new sst.aws.Nextjs("Web", {
  path: "apps/web",
  environment: {
    GRAPGQL_API_URL: api.url,
  },
});
