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
                <div id="features">
                    <h2 style="float:left">Trading:</h2> 
                    <li> Catalogue your books</li>
                    <li> show all books</li>
                    <li>borrow other user's book</li>
                    <li> Manage your books and request from Dashboard</li>
                    <input class="search" type="text" /> 
                </div>
               
              
        </nav>
        <div class="content" >
            <router-outlet></router-outlet>
        </div>
        <footer>
        <p><span class="label">Project developped by</span>: &nbsp; &nbsp; <em style="font-size:18px;font-weight:bold">Alseny Cissé</em></p>
        <p><span class="label">Email</span>: &nbsp; &nbsp;  alsenicisse@gmail.com</p>
        <p><span class="label">GitHub</span>: &nbsp; &nbsp;    </p> 
        </footer>
     </div>
    `,
    directives:[ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS]
})
@Routes([
   
    {path:'/', component: WelcomeHomeComponent}
])
export class AppComponent{
  pageTitle: string = 'Book Trading';
}