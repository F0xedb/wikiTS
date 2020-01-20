import { env } from "../environment";
import { Reader } from "../business/JsonReader";
/*
 * Returns general information about the api.
 * @param app the express server
 */
export function APIInfo(app: any) {
  //@ts-ignore
  app.get("/api/info", (req, res) =>
    res.send({
      name: env.name,
      port: env.port,
      cors: env.cors,
      log: env.logLevel,
      version: env.version,
      declaration: env.declarationJson
    })
  );
  //@ts-ignore
  app.get("/api/info/declaration", (req, res) => res.send(Reader()));
}
