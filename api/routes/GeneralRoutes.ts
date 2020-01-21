import { Reader } from "../business/JsonReader";

/*
 * Handles all routes that are specific to page implementations.
 * It returns all information about one or more classes.
 * @param app the express server
 */
export function GeneralDescription(app: any) {
  //@ts-ignore
  app.get("/api/general", (req, res) =>
    res.send({
      name: Reader().name,
      logo: Reader().logo,
      description: Reader().description,
      company: Reader().company
    })
  );
}
