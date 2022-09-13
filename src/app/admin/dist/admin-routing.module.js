"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AdminRoutingModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var admin_addproduct_component_1 = require("./admin-addproduct/admin-addproduct.component");
var admin_contact_component_1 = require("./admin-contact/admin-contact.component");
var admin_editproduct_component_1 = require("./admin-editproduct/admin-editproduct.component");
var admin_product_component_1 = require("./admin-product/admin-product.component");
var admin_component_1 = require("./admin.component");
var wishlist_component_1 = require("./wishlist/wishlist.component");
var dasboard_component_1 = require("./dasboard/dasboard.component");
var Adminroutes = [
    {
        path: '',
        component: admin_component_1.adminComponent,
        children: [
            {
                path: 'admin-contact',
                component: admin_contact_component_1.AdminContactComponent
            },
            {
                path: '',
                component: dasboard_component_1.DasboardComponent
            },
            {
                path: 'dasboard',
                component: dasboard_component_1.DasboardComponent
            },
            {
                path: 'admin-product',
                component: admin_product_component_1.AdminProductComponent
            },
            {
                path: 'wishlist',
                component: wishlist_component_1.WishlistComponent
            },
            {
                path: 'admin-addproduct',
                component: admin_addproduct_component_1.AdminAddproductComponent
            },
            {
                path: 'admin-editproduct/:id',
                component: admin_editproduct_component_1.AdminEditproductComponent
            }
        ]
    },
];
var AdminRoutingModule = /** @class */ (function () {
    function AdminRoutingModule() {
    }
    AdminRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(Adminroutes)],
            exports: [router_1.RouterModule]
        })
    ], AdminRoutingModule);
    return AdminRoutingModule;
}());
exports.AdminRoutingModule = AdminRoutingModule;
