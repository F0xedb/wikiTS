import * as express from "express";
import { env } from "./environment";
import { log } from "./log/Log";
import { RouteBuilder } from "./routes/RouteBuilder";
import { CorsBuilder } from "./business/Cors";
// @ts-ignore
const app = express();

RouteBuilder(app);
CorsBuilder(app);

app.listen(env.port, () => log(`${env.name} listening on port ${env.port}!`));
