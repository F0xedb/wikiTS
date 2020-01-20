import { Reader } from "../business/JsonReader";

/*
 * Handles all routes that are specific to a footer implementation.
 * It returns all information about one section.
 * @param app the express server
 */
export function FooterDescription(app: any) {
  //@ts-ignore
  app.get("/api/footer/", (req, res) => res.send(Reader().footer));
  //@ts-ignore
  app.get("/api/footer/:id", (req, res) =>
    res.send(Reader().footer.sections[req.params.id])
  );
}
