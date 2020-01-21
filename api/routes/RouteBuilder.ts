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

import { PageDescription } from "./PageRoutes";
import { SectionDescription } from "./SectionRoutes";
import { FooterDescription } from "./FooterRoutes";
import { NavigationDescription } from "./NavigationRoutes";
import { GeneralDescription } from "./GeneralRoutes";

import { APIInfo } from "./ApiInfo";
import { env } from "../environment";
/*
 * RouteBuilder generates all api endpoints of the wiki
 * @param app the application to build
 */
export function RouteBuilder(app: any) {
  //@ts-ignore
  app.get("/", (req, res) => res.send(`Hello this is the ${env.name} api!`));
  PageDescription(app);
  SectionDescription(app);
  FooterDescription(app);
  NavigationDescription(app);
  GeneralDescription(app);
  APIInfo(app);
}
