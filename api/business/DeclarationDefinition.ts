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

interface Page {
  name: string;
  description: string;
  sections: PageSection[];
}

interface PageSection {
  type: PageSectionType;
  title: string;
  inheritsID: number; // the inheritance of other pages
  payload: string; // valid markdown (if a table this should be in csv format)
  width: string; // used by the image component
  height: string; // also used by the image component
  css: string; // the prismjs css class to define the type of code
}

enum PageSectionType {
  TEXT, //* This section is just plain text
  TITLE, //* This section describes a title
  SUBTITLE, //* This section describes a subtitle
  TABLE, //* This section describes a table
  INFO, //* this section is a info note
  WARNING, //* this section is a warning note
  ERROR, //* this section is a error note
  IMAGE, //* this section describes an image (base64, url and more)
  LINK, //* a reference link
  CODE //* the code highlighter
}

interface Footer {
  sections: FooterSection[];
}

interface FooterSection {
  name: string;
  description: string;
  links: Link[];
}

interface Link {
  logo: string;
  url: string;
  name: string;
}

interface Navigation {
  name: string;
  sections: NavigationSection[];
}

interface NavigationSection {
  name: string;
  elements: NavigationElement[];
}

interface NavigationElement {
  name: string;
  pageID: number;
}

export interface JSONDeclaration {
  name: string;
  company: string;
  logo: string;
  description: string;
  pages: Page[];
  navigation: Navigation;
  footer: Footer;
}
