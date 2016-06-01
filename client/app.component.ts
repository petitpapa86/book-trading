import { Component} from '@angular/core';
import {WelcomeHomeComponent} from './home/welcome-home.component';
import {Routes, ROUTER_PROVIDERS, ROUTER_DIRECTIVES} from '@angular/router';
@Component({
    selector: 'my-app',
    template:`
    	<div class="page">
        <nav>
                <a id="brand">{{pageTitle}}</a>
                <ul id="left-nav">
                    <li><a [routerLink]="['/home']">Home</a></li>
                    <li><a href="javascript:void()">Register</a></li>
                    <li><a href="javascript:void">login</a></li>
                </ul>
        </nav>
        <div class="content">
            <router-outlet></router-outlet>
        </div>
     </div>
    `,
    directives:[ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS]
})
@Routes([
   
    {path:'/home', component: WelcomeHomeComponent}
])
export class AppComponent{
  pageTitle: string = 'Book Trading';
}