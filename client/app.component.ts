import { Component} from '@angular/core';
import {WelcomeHomeComponent} from './home/welcome-home.component';
import {Routes, ROUTER_PROVIDERS, ROUTER_DIRECTIVES} from '@angular/router';
@Component({
    selector: 'my-app',
    template:`
    	<div class='page'>
        <nav>
            <div>
                <a>{{pageTitle}}</a>
                <ul>
                    <li><a [routerLink]="['/home']">Home</a></li>
                </ul>
            </div>
        </nav>
        <div>
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