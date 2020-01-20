import * as express from "express";
import { env } from "./environment";
import { RouteBuilder } from "./routes/RouteBuilder";
import { CorsBuilder } from "./business/Cors";
// @ts-ignore
const app = express();

RouteBuilder(app);
CorsBuilder(app);

app.listen(env.port, () =>
  console.log(`Example app listening on port ${port}!`)
);
