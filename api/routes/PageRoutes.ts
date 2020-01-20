import { Reader } from "../business/JsonReader";

/*
 * Handles all routes that are specific to page implementations.
 * It returns all information about one or more classes.
 * @param app the express server
 */
export function PageDescription(app: any) {
  //@ts-ignore
  app.get("/api/pages", (req, res) => res.send(Reader().pages));
  //@ts-ignore
  app.get("/api/page/:id", (req, res) =>
    res.send(Reader().pages[req.params.id])
  );
  //@ts-ignore
  app.get("/api/page/:id/name", (req, res) =>
    res.send(Reader().pages[req.params.id].name)
  );
}
