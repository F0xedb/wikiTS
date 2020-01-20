/*
 * RouteBuilder generates all api endpoints of the wiki
 * @param app the application to build
 */
export function RouteBuilder(app: any) {
  app.get("/", (req, res) => res.send("Hello World!"));
}
