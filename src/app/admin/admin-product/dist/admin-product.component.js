"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AdminProductComponent = void 0;
var core_1 = require("@angular/core");
var $ = require("jquery");
var AdminProductComponent = /** @class */ (function () {
    function AdminProductComponent(AdminService) {
        this.AdminService = AdminService;
        this.listproductAdmin = [];
        this.page = 1;
    }
    AdminProductComponent.prototype.ngOnInit = function () {
        this.getProduct();
        $(document).ready(function () {
            $('#sidebarCollapse').on('click', function () {
                $('#sidebar').toggleClass('active');
            });
        });
    };
    AdminProductComponent.prototype.getProduct = function () {
        var _this = this;
        return this.AdminService.getProduct().subscribe(function (data) {
            _this.listproductAdmin = data;
        });
    };
    AdminProductComponent.prototype.deleteProduct = function (id) {
        var _this = this;
        return this.AdminService.deleteProduct(id).subscribe(function (data) {
            _this.listproductAdmin = _this.listproductAdmin.filter(function (item) {
                return item.id != id;
            });
            alert('Xóa sản phẩm thành công');
        });
    };
    AdminProductComponent = __decorate([
        core_1.Component({
            selector: 'app-admin-product',
            templateUrl: './admin-product.component.html',
            styleUrls: ['./admin-product.component.scss']
        })
    ], AdminProductComponent);
    return AdminProductComponent;
}());
exports.AdminProductComponent = AdminProductComponent;
