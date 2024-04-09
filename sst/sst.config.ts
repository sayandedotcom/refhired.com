export default {
  config(_input) {
    return {
      name: "refhiredcom-sst",
      region: "us-east-1",
    };
  },
  stacks(app) {
    // app.stack(Database).stack(Api).stack(Web);
  },
};
//  satisfies SSTConfig;
