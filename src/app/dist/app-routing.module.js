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
var contact_component_1 = require("./contact/contact.component");
var home_page_component_1 = require("./home-page/home-page.component");
var not_found_error_component_1 = require("./not-found-error/not-found-error.component");
var product_component_1 = require("./product/product.component");
var product_announ_component_1 = require("./product-announ/product-announ.component");
var auth_guard_1 = require("./auth.guard");
var detail_component_1 = require("./detail/detail.component");
var cart_component_1 = require("./cart/cart.component");
var routes = [
    {
        path: 'home-page',
        component: home_page_component_1.HomePageComponent
    },
    {
        path: 'contact',
        component: contact_component_1.ContactComponent
    },
    {
        path: 'product',
        component: product_component_1.ProductComponent
    },
    {
        path: "",
        redirectTo: 'product-announ',
        pathMatch: 'full'
    },
    {
        path: 'product-announ',
        component: product_announ_component_1.ProductAnnounComponent
    },
    {
        path: 'detail/:id',
        component: detail_component_1.DetailComponent
    },
    {
        path: 'cart',
        component: cart_component_1.CartComponent
    },
    {
        path: 'admin',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./admin/admin.module'); }).then(function (m) { return m.AdminModule; }); },
        canActivate: [auth_guard_1.AuthGuard]
    },
    {
        path: '**',
        component: not_found_error_component_1.NotFoundErrorComponent
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
