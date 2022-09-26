"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppRoutingModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var not_found_error_component_1 = require("./not-found-error/not-found-error.component");
var router_2 = require("@angular/router");
var auth_guard_1 = require("./auth.guard");
var dangnhap_component_1 = require("./dangnhap/dangnhap.component");
var dangky_component_1 = require("./dangky/dangky.component");
var quenmatkhau_component_1 = require("./quenmatkhau/quenmatkhau.component");
var routes = [
    {
        path: 'web',
        // component:WebComponent
        loadChildren: function () { return Promise.resolve().then(function () { return require('./web/web.module'); }).then(function (m) { return m.WebModule; }); }
    },
    {
        path: 'dangnhap',
        component: dangnhap_component_1.DangnhapComponent
    },
    {
        path: 'dangky',
        component: dangky_component_1.DangkyComponent
    },
    {
        path: 'quenmatkhau',
        component: quenmatkhau_component_1.QuenmatkhauComponent
    },
    {
        path: 'admin',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./admin/admin.module'); }).then(function (m) { return m.AdminModule; }); },
        canActivate: [auth_guard_1.AuthGuard]
    },
    {
        path: "",
        redirectTo: '/web/product-announ',
        pathMatch: 'full'
    },
    {
        path: '**',
        component: not_found_error_component_1.NotFoundErrorComponent
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes, {
                    preloadingStrategy: router_2.PreloadAllModules
                }),],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
