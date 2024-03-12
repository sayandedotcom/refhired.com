import { expressMiddleware } from "@apollo/server/express4";
import bodyParser from "body-parser";
import cors from "cors";

import { app, server } from "./app.js";

const start = async () => {
  app.use(bodyParser.json());

  app.use(
    cors<cors.CorsRequest>({
      origin: [process.env.FRONTEND_DEV_URL as string, process.env.FRONTEND_PROD_URL as string],
      credentials: true,
    })
  );

  await server.start();

  app.use(
    "/graphql",
    expressMiddleware(server as any, {
      context: async ({ req, res }) => {
        console.log("Cookie in Backend=========================================", req);

        return {
          name: "Context",
        };
      },
    })
  );

  app.listen(process.env.BACKEND_PORT, () => console.log(`GraphQL server running at Port  🚀`));
};

start();
