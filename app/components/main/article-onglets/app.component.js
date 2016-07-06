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
////////////////////////<@Component>///////////////////////////////////////////
/////decorator function that takes a metadata object as argument
var AppArticleOnglets = (function () {
    function AppArticleOnglets() {
    }
    AppArticleOnglets = __decorate([
        core_1.Component({
            //selector is a css selector for an element that represents the component
            selector: 'article-onglets',
            //
            template: '<p>article-onglets</p>'
        }), 
        __metadata('design:paramtypes', [])
    ], AppArticleOnglets);
    return AppArticleOnglets;
}());
exports.AppArticleOnglets = AppArticleOnglets;
//# sourceMappingURL=app.component.js.map