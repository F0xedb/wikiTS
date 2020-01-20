/*
 * CORS generates the cors headers that are allowed to use this server
 ? Note: You define the cors endpoint in the config
 */
import { env } from "../environment";
import { log } from "../log/Log";

/*
 * This prepares the server to allow requests to come from different domains/subdomains
 * @param app the express server instance
 */
export function CorsBuilder(app: any) {
  log(env.cors);
}
