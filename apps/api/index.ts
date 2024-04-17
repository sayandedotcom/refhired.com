import { expressMiddleware } from "@apollo/server/express4";
import bodyParser from "body-parser";
import cors from "cors";

import { app, server } from "./app.js";

const start = async () => {
  app.use(bodyParser.json());

  await server.start();

  app.use(
    "/graphql",
    cors({ credentials: true }),
    expressMiddleware(
      server as any
      // , {
      // context: async ({ req, res }) => {
      //   console.log("req-------------", req.headers);

      //   return {
      //     user: await JWTService.verifyTokenhandler(req),
      //   };
      // },
      // }
    )
  );

  app.listen(process.env.BACKEND_PORT, () => console.log(`GraphQL server running at Port  🚀`));
};

start();

// app.use(
//   cors<cors.CorsRequest>({
//     // origin: [process.env.FRONTEND_DEV_URL as string, process.env.FRONTEND_PROD_URL as string],
//     credentials: true,
//   })
// );
