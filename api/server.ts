import * as express from "express";
import { env } from "./environment";
import { log } from "./log/Log";
import { RouteBuilder } from "./routes/RouteBuilder";
import { CorsBuilder } from "./business/Cors";
// @ts-ignore
const app = express();

// cors must be build before all other routes
CorsBuilder(app);
RouteBuilder(app);

app.listen(env.port, env.ip, () =>
  log(`${env.name} listening on port ${env.port}!`)
);
