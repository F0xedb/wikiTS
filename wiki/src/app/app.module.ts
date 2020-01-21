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
import { UrlFormatPipe } from "./url-format.pipe";
import { FooterComponent } from "./footer/footer.component";
import { CodeHighlighterModule } from "primeng/codehighlighter";
import { stripWhitespace } from "./strip-whitespace.pipe";
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    PageComponent,
    LandingPageComponent,
    SectionComponent,
    UrlFormatPipe,
    FooterComponent,
    stripWhitespace
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
    TableModule,
    CodeHighlighterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
