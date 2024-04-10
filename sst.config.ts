import { SSTConfig } from "sst";

import { APP } from "./stacks/app";

export default {
  config(_input) {
    return {
      name: "refhiredcom-sst",
      region: "us-east-1",
    };
  },
  stacks(app) {
    app.stack(APP);
  },
} satisfies SSTConfig;
