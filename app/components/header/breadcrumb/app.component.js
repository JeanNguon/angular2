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
//metadata object that invokes Component
var core_1 = require('@angular/core');
////////////////////////<@class Object>///////////////////////////////////////////
var NavLi = (function () {
    function NavLi() {
    }
    return NavLi;
}());
exports.NavLi = NavLi;
var SubNavLi = (function () {
    function SubNavLi() {
    }
    return SubNavLi;
}());
exports.SubNavLi = SubNavLi;
var NAVLIS = [
    { id: 1, title: 'Gestion des Ouvrages' },
    { id: 2, title: 'Visite' },
    { id: 3, title: 'Analyse et Restitution' },
    { id: 4, title: 'Administration' },
    { id: 5, title: 'Paramètres' }
];
var SUBNAVLIS = [
    { title: 'Equipement' },
    { title: 'Portion d\'Intégrité' },
    { title: 'Ensemble Electrique' },
    { title: 'Documentation' }
];
////////////////////////<@End class Object>///////////////////////////////////////
////////////////////////<@Component>///////////////////////////////////////////
/////decorator function that takes a metadata object as argument
var AppMenu = (function () {
    function AppMenu() {
        this.navLis = NAVLIS;
        this.subNavLis = SUBNAVLIS;
    }
    AppMenu.prototype.onSelect = function (navLi) {
        if (this.selectedNavLi == null) {
            this.selectedNavLi = navLi;
        }
        else {
            this.selectedNavLi = null;
        }
    };
    AppMenu = __decorate([
        core_1.Component({
            //selector is a css selector for an element that represents the component
            selector: 'section-breadcrumb',
            //
            template: 
            // 	'<div class="collapse navbar-collapse bs-example-js-navbar-collapse">'+
            // 	'<ul class="navLis nav navbar-nav">'+
            //  	'<li *ngFor="let navLi of navLis" class="col-md-1 dropdown">'+
            // 	'<a class="dropdown-toggle">{{navLi.title}}</a>'+
            // '</li>'+
            //  	// '<li class="col-md-1"></li>'+
            //  	// '<li class="col-md-1"></li>'+
            //  	// '<li class="col-md-1"></li>'+
            //  	// '<li class="col-md-1"></li>'+
            //  	// '<li class="col-md-1"></li>'+
            // 	'</ul>'
            // '<div class="dropdown">'+
            // '<a id="dLabel" data-target="#"  data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">'+
            // '    Dropdown trigger'+
            // '<span class="caret"></span>'+
            // '</a>'+
            // '<ul class="dropdown-menu" aria-labelledby="drop1"> <li><a href="#">Action</a></li> <li><a href="#">Another action</a></li> <li><a href="#">Something else here</a></li> <li role="separator" class="divider"></li> <li><a href="#">Separated link</a></li> </ul>'+
            // '</div>'
            // 
            '<div class="bs-example">' +
                '<nav id="navbar-example" class="navbar navbar-default navbar-static">' +
                '<div class="container-fluid">' +
                '<div class="navbar-header">' +
                '<button class="navbar-toggle collapsed" type="button" data-toggle="collapse" data-target=".bs-example-js-navbar-collapse">' +
                '<span class="sr-only">Toggle navigation</span>' +
                // '<span class="icon-bar"></span>'+
                // '<span class="icon-bar"></span>'+
                // '<span class="icon-bar"></span>'+
                '</button>' +
                '<a class="navbar-brand" href="#">Accueil</a>' +
                '</div>' +
                '<div class="collapse navbar-collapse bs-example-js-navbar-collapse">' +
                '<ul *ngFor="let navLi of navLis"(click)="onSelect(navLi)" class="nav navbar-nav">' +
                // '<li class="dropdown open">'+
                '<li class="dropdown"  [class.open]="navLi === selectedNavLi" >' +
                '<a id="{{navLi.id}}" href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="true">' +
                '{{navLi.title}}' +
                '<span class="caret"></span>' +
                '</a>' +
                '<ul  class="dropdown-menu" aria-labelledby="drop1">' +
                '<li *ngFor="let subNavLi of subNavLis" >' +
                '<a href="#">{{subNavLi.title}}</a>' +
                '</li>' +
                '</ul>' +
                '</li>' +
                '</ul>' +
                '<ul class="nav navbar-nav navbar-right">' +
                '<li><a href="#">Action du Site</a></li>' +
                '<li><a href="#">F11</a></li>' +
                '</ul>' +
                // '<div *ngIf="selectNavLi">'+
                // 			'<p>test</p>'+
                // 		'</div>'+
                '</div>' +
                '</div>' +
                '</nav>' +
                '</div>'
        }), 
        __metadata('design:paramtypes', [])
    ], AppMenu);
    return AppMenu;
}());
exports.AppMenu = AppMenu;
//# sourceMappingURL=app.component.js.map