/*
 *  MIT License
 *  
 *  Copyright (c) 2020 Meyers Tom
 *  
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the "Software"), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *  
 *  The above copyright notice and this permission notice shall be included in all
 *  copies or substantial portions of the Software.
 *  
 *  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 *  SOFTWARE.
*/

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
