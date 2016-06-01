"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require('@angular/core');
const welcome_home_component_1 = require('./home/welcome-home.component');
const router_1 = require('@angular/router');
let AppComponent = class AppComponent {
    constructor() {
        this.pageTitle = 'Book Trading';
    }
};
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: `
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
        directives: [router_1.ROUTER_DIRECTIVES],
        providers: [router_1.ROUTER_PROVIDERS]
    }),
    router_1.Routes([
        { path: '/home', component: welcome_home_component_1.WelcomeHomeComponent }
    ]), 
    __metadata('design:paramtypes', [])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map