import { Reader } from "../business/JsonReader";

/*
 * Handles all routes that are specific to a section implementation.
 * It returns all information about one section.
 * @param app the express server
 */
export function SectionDescription(app: any) {
  //@ts-ignore
  app.get("/api/section/:pageID/:sectionID", (req, res) =>
    res.send(Reader().pages[req.params.pageID].sections[req.params.sectionID])
  );
}
