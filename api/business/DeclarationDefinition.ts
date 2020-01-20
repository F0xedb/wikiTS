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
  LINK //* a reference link
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
  logo: string;
  description: string;
  pages: Page[];
  navigation: Navigation;
  footer: Footer;
}
