"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AdminEditproductComponent = void 0;
var core_1 = require("@angular/core");
var AdminEditproductComponent = /** @class */ (function () {
    function AdminEditproductComponent(AdminService, route, Router) {
        this.AdminService = AdminService;
        this.route = route;
        this.Router = Router;
        this.edit = [];
    }
    AdminEditproductComponent.prototype.ngOnInit = function () {
        $(document).ready(function () {
            $('#sidebarCollapse').on('click', function () {
                $('#sidebar').toggleClass('active');
            });
        });
        this.getDetailProduct();
    };
    AdminEditproductComponent.prototype.getDetailProduct = function () {
        var _this = this;
        this.route.params.subscribe(function (data) {
            _this.AdminService.getDetailProduct(data.id).subscribe(function (data) { _this.edit = data; });
        });
    };
    AdminEditproductComponent.prototype.updateProduct = function () {
        var _this = this;
        this.AdminService.updateProduct(this.edit.id, this.edit).subscribe(function (data) {
            _this.Router.navigateByUrl('/admin/admin-product');
        });
        alert('Cập nhật thành công');
    };
    AdminEditproductComponent = __decorate([
        core_1.Component({
            selector: 'app-admin-editproduct',
            templateUrl: './admin-editproduct.component.html',
            styleUrls: ['./admin-editproduct.component.scss']
        })
    ], AdminEditproductComponent);
    return AdminEditproductComponent;
}());
exports.AdminEditproductComponent = AdminEditproductComponent;
