new Cron(stack, "cron", {
  schedule: "rate(1 minute)",
  job: "packages/functions/src/cron.handler",
});
