"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
//Application root component, AppComponent
var app_component_1 = require('./components/main/my-app/app.component');
var app_component_2 = require('./components/main/section-title/app.component');
var app_component_3 = require('./components/main/research-menu/app.component');
var app_component_4 = require('./components/main/article-onglets/app.component');
var app_component_5 = require('./components/main/article-menu/app.component');
var app_component_6 = require('./components/header/breadcrumb/app.component');
////////////////////////////<End Import>/////////////////////////////////////////
//AppComponent's boostrap calling
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent);
platform_browser_dynamic_1.bootstrap(app_component_2.AppTitle);
platform_browser_dynamic_1.bootstrap(app_component_4.AppArticleOnglets);
platform_browser_dynamic_1.bootstrap(app_component_3.AppResearchMenu);
platform_browser_dynamic_1.bootstrap(app_component_5.AppArticleMenu);
platform_browser_dynamic_1.bootstrap(app_component_6.AppMenu);
//# sourceMappingURL=main.js.map