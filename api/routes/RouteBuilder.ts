import { PageDescription } from "./PageRoutes";
import { SectionDescription } from "./SectionRoutes";
import { FooterDescription } from "./FooterRoutes";
import { NavigationDescription } from "./NavigationRoutes";
import { GeneralDescription } from "./GeneralRoutes";

import { APIInfo } from "./ApiInfo";
import { env } from "../environment";
/*
 * RouteBuilder generates all api endpoints of the wiki
 * @param app the application to build
 */
export function RouteBuilder(app: any) {
  //@ts-ignore
  app.get("/", (req, res) => res.send(`Hello this is the ${env.name} api!`));
  PageDescription(app);
  SectionDescription(app);
  FooterDescription(app);
  NavigationDescription(app);
  GeneralDescription(app);
  APIInfo(app);
}
