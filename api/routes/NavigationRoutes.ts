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
