import { Component} from '@angular/core';
import {WelcomeHomeComponent} from './home/welcome-home.component';
import {RouteConfig, ROUTER_PROVIDERS, ROUTER_DIRECTIVES} from '@angular/router';
@Component({
    selector: 'my-app',
    templateUrl:'client/app.component.html',
    directives:[ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS]
})
@RouteConfig([
    {path:'/', name:'Home' component: WelcomeHomeComponent, useAsDefault: true}
    {path:'/home', name:"Home", component: WelcomeHomeComponent}
])
export class AppComponent{
  pageTitle: string = 'Book Trading';
}