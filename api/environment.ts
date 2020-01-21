/*
 * This file contains all environment variables required to configure the api.
 * Each variable has a specific use case and impact on the application
 */

//* This holds all environmental data
export const env = {
  //* The ip address to listen to
  ip: "0.0.0.0",
  //* An array of CORS allowed domains
  cors: [
    "http://localhost:4200", // angular application
    "http://localhost", // angular application
    "http://localhost:8080", // angular application
    "http://wiki-demo.odex.be", // official domain
    "https://wiki-demo.odex.be" // https variant
  ],
  //* The current log level (Higher number displays more information)
  logLevel: 3,
  //* The port on which to expose this API
  port: 3000,
  //* The name of the API
  name: "WikiTS",
  //* the declaration to use in order to render the wiki out
  declarationJson: "/app/declaration.json",
  version: "v0.0.1"
};
