import { Component, OnInit } from "@angular/core";
import {
  NavigationService,
  Navigation,
  NavigationSection
} from "../services/navigation.service";
import { MenuItem } from "primeng/api";
import { Router } from "@angular/router";

@Component({
  selector: "app-navigation",
  templateUrl: "./navigation.component.html",
  styleUrls: ["./navigation.component.scss"]
})
export class NavigationComponent implements OnInit {
  nav: Navigation;
  items: MenuItem[];
  constructor(private NavService: NavigationService, private router: Router) {
    this.NavService.getNavigation().subscribe(x => {
      this.nav = x;
      this.NavService.navigation = x;
      this.populate();
    });
  }

  ngOnInit() {}

  page(id: number) {
    console.log("Opening page: " + id);
    this.router.navigate(["page", id]);
  }

  getSectionItems(section: NavigationSection): MenuItem[] {
    let items = [];
    section.elements.forEach(element => {
      items.push({
        label: element.name,
        command: () => this.page(element.pageID)
      });
    });
    return items;
  }

  //* populate the navigation screen
  populate() {
    this.items = [];
    this.nav.sections.forEach(section => {
      this.items.push({
        label: section.name,
        items: this.getSectionItems(section)
      });
    });
  }
}
