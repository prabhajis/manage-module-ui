import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {ButtonsModule, PopoverModule, DropdownModule} from 'ng2-bootstrap'

import {AppComponent} from './app.component';
import {RootLevelRoutes} from './app.routes';
import {CommonsModule} from "./commons/commons.module";
import {AppGuard, LoginGuard} from "./app.guard";
import {HeaderComponent} from "./commons/components/header/header.component";
import {HamburgerMenuComponent} from "./commons/components/hamburger-menu/hamburger-menu.component";
import {UserAvatarComponent} from "./commons/components/user-avatar/user-avatar.component";
import {MainMenuComponent} from "./commons/components/main-menu/main-menu.component";
import {BreadcrumbsComponent} from "./commons/components/breadcrumbs/breadcrumbs.component";
import {ChartsModule} from "ng2-charts";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HamburgerMenuComponent,
    UserAvatarComponent,
    MainMenuComponent,
    BreadcrumbsComponent
  ],
  imports: [
    BrowserModule,
    RootLevelRoutes,
    FormsModule,
    HttpModule,
    CommonsModule,
    ChartsModule,
    ButtonsModule.forRoot(),
    PopoverModule.forRoot(),
    DropdownModule.forRoot()
  ],
  providers: [
    AppGuard,
    LoginGuard,

  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
