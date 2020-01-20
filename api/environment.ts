/*
 * This file contains all environment variables required to configure the api.
 * Each variable has a specific use case and impact on the application
 */

//* This holds all environmental data
export const env = {
  //* An array of CORS allowed domains
  cors: [
    "http://localhost:4200", // angular application
    "http://odex.be", // official domain
    "http://pbfp.xyz", // official domain
    "https://odex.be", // https variant
    "https://pbfp.xyz" // https variant
  ],
  //* The current log level (Higher number displays more information)
  logLevel: 3,
  //* The port on which to expose this API
  port: 3000
};
