/*
 * CORS generates the cors headers that are allowed to use this server
 ? Note: You define the cors endpoint in the config
 */
import { env } from "../environment";
import { log } from "../log/Log";
//@ts-ignore
import * as cors from "cors";

var corsOptions = {
  //@ts-ignore
  origin: function(origin, callback) {
    if (env.cors.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  }
};

/*
 * This prepares the server to allow requests to come from different domains/subdomains
 * @param app the express server instance
 */
export function CorsBuilder(app: any) {
  log(env.cors);
  app.options("*", cors(corsOptions));
  app.use(cors(corsOptions));
}
