import { Reader } from "../business/JsonReader";

/*
 * Handles all routes that are specific to a navigation implementation.
 * It returns all information about the navigation component.
 * @param app the express server
 */
export function NavigationDescription(app: any) {
  //@ts-ignore
  app.get("/api/nav/", (req, res) => res.send(Reader().navigation));
  //@ts-ignore
  app.get("/api/nav/:id", (req, res) =>
    res.send(Reader().navigation.sections[req.params.id])
  );
  //@ts-ignore
  app.get("/api/nav/:id/:elementID", (req, res) =>
    res.send(
      Reader().navigation.sections[req.params.id].elements[req.params.elementID]
    )
  );
}
