"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var header_component_1 = require("./header/header.component");
var footer_component_1 = require("./footer/footer.component");
var contact_component_1 = require("./contact/contact.component");
var product_component_1 = require("./product/product.component");
var home_page_component_1 = require("./home-page/home-page.component");
var tieudiem_component_1 = require("./tieudiem/tieudiem.component");
var not_found_error_component_1 = require("./not-found-error/not-found-error.component");
var admin_component_1 = require("./admin/admin.component");
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
var common_1 = require("@angular/common");
var http_1 = require("@angular/common/http");
var product_announ_component_1 = require("./product-announ/product-announ.component");
var ngx_pagination_1 = require("ngx-pagination");
var head_component_1 = require("./head/head.component");
var common_2 = require("@angular/common");
var detail_component_1 = require("./detail/detail.component");
var cart_component_1 = require("./cart/cart.component");
var ngx_owl_carousel_o_1 = require("ngx-owl-carousel-o");
var animations_1 = require("@angular/platform-browser/animations");
var wishlist_component_1 = require("./admin/wishlist/wishlist.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                header_component_1.HeaderComponent,
                footer_component_1.FooterComponent,
                contact_component_1.ContactComponent,
                product_component_1.ProductComponent,
                home_page_component_1.HomePageComponent,
                tieudiem_component_1.TieudiemComponent,
                not_found_error_component_1.NotFoundErrorComponent,
                admin_component_1.adminComponent,
                product_announ_component_1.ProductAnnounComponent,
                head_component_1.HeadComponent,
                detail_component_1.DetailComponent,
                cart_component_1.CartComponent,
                wishlist_component_1.WishlistComponent
            ],
            imports: [
                forms_1.FormsModule,
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                http_1.HttpClientModule,
                ngx_pagination_1.NgxPaginationModule,
                ngx_owl_carousel_o_1.CarouselModule,
                animations_1.BrowserAnimationsModule,
            ],
            schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA],
            providers: [common_1.CurrencyPipe, { provide: common_2.LocationStrategy, useClass: common_2.HashLocationStrategy }],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
