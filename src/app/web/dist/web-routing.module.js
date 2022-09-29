"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.WebRoutingModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var home_page_component_1 = require("../home-page/home-page.component");
var product_announ_component_1 = require("../product-announ/product-announ.component");
var product_component_1 = require("../product/product.component");
var contact_component_1 = require("../contact/contact.component");
var detail_component_1 = require("../detail/detail.component");
var cart_component_1 = require("../cart/cart.component");
var web_component_1 = require("./web.component");
var wishlist_component_1 = require("../admin/wishlist/wishlist.component");
var news_detail_component_1 = require("../news-detail/news-detail.component");
var tuyendung_component_1 = require("../tuyendung/tuyendung.component");
var tuyendungchitiet_component_1 = require("../tuyendungchitiet/tuyendungchitiet.component");
var routes = [
    {
        path: '',
        component: web_component_1.WebComponent,
        children: [
            {
                path: 'news-detail/:id',
                component: news_detail_component_1.NewsDetailComponent
            },
            {
                path: 'tuyendung',
                component: tuyendung_component_1.TuyendungComponent
            },
            {
                path: 'tuyendungchitiet',
                component: tuyendungchitiet_component_1.TuyendungchitietComponent
            },
            {
                path: 'home-page',
                component: home_page_component_1.HomePageComponent,
                data: {
                    title: 'Home',
                    breadcrumb: [
                        {
                            label: 'Home',
                            url: ''
                        }
                    ]
                }
            },
            {
                path: 'contact',
                component: contact_component_1.ContactComponent,
                data: {
                    title: 'Contact',
                    breadcrumb: [
                        {
                            label: 'Contact',
                            url: ''
                        }
                    ]
                }
            },
            {
                path: 'product',
                component: product_component_1.ProductComponent,
                data: {
                    title: 'Tin tức',
                    breadcrumb: [
                        {
                            label: 'Tin tức',
                            url: ''
                        }
                    ]
                }
            },
            {
                path: "wishlist",
                component: wishlist_component_1.WishlistComponent
            },
            {
                path: '',
                component: product_announ_component_1.ProductAnnounComponent
            },
            {
                path: 'product-announ',
                component: product_announ_component_1.ProductAnnounComponent,
                data: {
                    title: 'Sản phẩm ',
                    breadcrumb: [
                        {
                            label: 'Sản phẩm',
                            url: ''
                        }
                    ]
                }
            },
            {
                path: 'detail/:id',
                component: detail_component_1.DetailComponent,
                data: {
                    title: 'Chi tiết sản phẩm ',
                    breadcrumb: [
                        {
                            label: 'Sản phẩm',
                            url: '/web/product-announ'
                        },
                        {
                            label: 'Chi tiết sản phẩm',
                            url: 'detail/:id'
                        }
                    ]
                }
            },
            {
                path: 'cart',
                component: cart_component_1.CartComponent,
                data: {
                    title: 'Chi tiết sản phẩm ',
                    breadcrumb: [
                        {
                            label: 'SẢN PHẨM',
                            url: '/web/product-announ'
                        },
                        {
                            label: 'Chi tiết sản phẩm',
                            url: 'detail/:id'
                        },
                        {
                            label: 'Giỏ hàng',
                            url: '/web/cart'
                        }
                    ]
                }
            },
        ]
    }
];
var WebRoutingModule = /** @class */ (function () {
    function WebRoutingModule() {
    }
    WebRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        })
    ], WebRoutingModule);
    return WebRoutingModule;
}());
exports.WebRoutingModule = WebRoutingModule;
