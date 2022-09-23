"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.WebModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var web_routing_module_1 = require("./web-routing.module");
var web_component_1 = require("./web.component");
var header_component_1 = require("../header/header.component");
var footer_component_1 = require("../footer/footer.component");
var contact_component_1 = require("../contact/contact.component");
var product_component_1 = require("../product/product.component");
var home_page_component_1 = require("../home-page/home-page.component");
var tieudiem_component_1 = require("../tieudiem/tieudiem.component");
var not_found_error_component_1 = require("../not-found-error/not-found-error.component");
var product_announ_component_1 = require("../product-announ/product-announ.component");
var head_component_1 = require("../head/head.component");
var detail_component_1 = require("../detail/detail.component");
var cart_component_1 = require("../cart/cart.component");
var ng_dynamic_breadcrumb_1 = require("ng-dynamic-breadcrumb");
var common_2 = require("@angular/common");
var ngx_owl_carousel_o_1 = require("ngx-owl-carousel-o");
var ngx_pagination_1 = require("ngx-pagination");
var WebModule = /** @class */ (function () {
    function WebModule() {
    }
    WebModule = __decorate([
        core_1.NgModule({
            declarations: [
                web_component_1.WebComponent,
                header_component_1.HeaderComponent,
                footer_component_1.FooterComponent,
                contact_component_1.ContactComponent,
                product_component_1.ProductComponent,
                home_page_component_1.HomePageComponent,
                tieudiem_component_1.TieudiemComponent,
                not_found_error_component_1.NotFoundErrorComponent,
                // adminComponent,
                product_announ_component_1.ProductAnnounComponent,
                head_component_1.HeadComponent,
                detail_component_1.DetailComponent,
                cart_component_1.CartComponent,
            ],
            imports: [
                common_1.CommonModule,
                web_routing_module_1.WebRoutingModule,
                forms_1.FormsModule,
                ngx_pagination_1.NgxPaginationModule,
                ngx_owl_carousel_o_1.CarouselModule,
                forms_1.ReactiveFormsModule,
                ng_dynamic_breadcrumb_1.NgDynamicBreadcrumbModule
            ],
            providers: [common_2.CurrencyPipe,]
        })
    ], WebModule);
    return WebModule;
}());
exports.WebModule = WebModule;
