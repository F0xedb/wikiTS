import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NavigationComponent } from "./navigation/navigation.component";
import { MenuModule } from "primeng/menu";
import { PageComponent } from "./page/page.component";
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { CardModule } from "primeng/card";
import { FieldsetModule } from "primeng/fieldset";
import { MessagesModule } from "primeng/messages";
import { MessageModule } from "primeng/message";
import { SectionComponent } from "./section/section.component";
import { LightboxModule } from "primeng/lightbox";
import { OverlayPanelModule } from "primeng/overlaypanel";
import { TableModule } from "primeng/table";
import { UrlFormatPipe } from './url-format.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    PageComponent,
    LandingPageComponent,
    SectionComponent,
    UrlFormatPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MenuModule,
    CardModule,
    FieldsetModule,
    MessagesModule,
    MessageModule,
    LightboxModule,
    OverlayPanelModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
