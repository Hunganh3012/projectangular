"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AdminModule = exports.CustomCurrencyMaskConfig = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var admin_routing_module_1 = require("./admin-routing.module");
var admin_contact_component_1 = require("./admin-contact/admin-contact.component");
var admin_product_component_1 = require("./admin-product/admin-product.component");
var admin_addproduct_component_1 = require("./admin-addproduct/admin-addproduct.component");
var sidebar_component_1 = require("./sidebar/sidebar.component");
// import { FormsModule } from '@angular/forms';
var admin_editproduct_component_1 = require("./admin-editproduct/admin-editproduct.component");
var admin_option_component_1 = require("./admin-option/admin-option.component");
var ngx_pagination_1 = require("ngx-pagination");
var dasboard_component_1 = require("./dasboard/dasboard.component");
var ng2_file_upload_1 = require("ng2-file-upload");
var ng_1 = require("@cloudinary/ng");
var ngx_dropzone_1 = require("ngx-dropzone");
var ng2_currency_mask_1 = require("ng2-currency-mask");
var ng2_currency_mask_2 = require("ng2-currency-mask");
var admin_news_component_1 = require("./admin-news/admin-news.component");
var admin_addnews_component_1 = require("./admin-addnews/admin-addnews.component");
var my_filter_pipe_1 = require("../my-filter.pipe");
var ng2_ckeditor_1 = require("ng2-ckeditor");
var drag_drop_1 = require("@angular/cdk/drag-drop");
// import { NgxPaginationModule } from 'ngx-pagination';
exports.CustomCurrencyMaskConfig = {
    align: 'left',
    allowNegative: false,
    decimal: ',',
    precision: 3,
    prefix: '',
    suffix: '',
    thousands: '.'
};
var AdminModule = /** @class */ (function () {
    function AdminModule() {
    }
    AdminModule = __decorate([
        core_1.NgModule({
            declarations: [
                admin_contact_component_1.AdminContactComponent,
                admin_product_component_1.AdminProductComponent,
                admin_addproduct_component_1.AdminAddproductComponent,
                admin_editproduct_component_1.AdminEditproductComponent,
                admin_option_component_1.AdminOptionComponent,
                sidebar_component_1.SidebarComponent,
                dasboard_component_1.DasboardComponent,
                admin_news_component_1.AdminNewsComponent,
                admin_addnews_component_1.AdminAddnewsComponent,
                my_filter_pipe_1.MyFilterPipe
                // HeadComponent
                // WishlistComponent,
            ],
            imports: [
                common_1.CommonModule,
                ng2_ckeditor_1.CKEditorModule,
                ng2_file_upload_1.FileUploadModule,
                ng_1.CloudinaryModule,
                admin_routing_module_1.AdminRoutingModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                ngx_pagination_1.NgxPaginationModule,
                ngx_dropzone_1.NgxDropzoneModule,
                ng2_currency_mask_1.CurrencyMaskModule,
                drag_drop_1.DragDropModule,
            ],
            providers: [
                { provide: ng2_currency_mask_2.CURRENCY_MASK_CONFIG, useValue: exports.CustomCurrencyMaskConfig }
            ]
        })
    ], AdminModule);
    return AdminModule;
}());
exports.AdminModule = AdminModule;
