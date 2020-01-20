import { env } from "../environment";
import { JSONDeclaration } from "../business/DeclarationDefinition";
import * as fs from "fs";

const data = fs.readFileSync(env.declarationJson);
const json: JSONDeclaration = JSON.parse(data.toString());
/*
 * Return a json object holding all wiki information
 * Retrieves the declaration file as described in the environment file
 */
export function Reader() {
  //? return private variable as this function will get called a lot
  //? If we were to parse json here it would cause a lot of latency
  return json;
}
