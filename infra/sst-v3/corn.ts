export const corn = new sst.aws.Cron("MyCronJob", {
  schedule: "rate(1 minute)",
  job: {
    handler: "src/cron.handler",
    timeout: "60 seconds",
  },
});
