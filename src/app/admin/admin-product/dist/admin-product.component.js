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
var sweetalert2_1 = require("sweetalert2");
var AdminProductComponent = /** @class */ (function () {
    function AdminProductComponent(AdminService, toastr) {
        this.AdminService = AdminService;
        this.toastr = toastr;
        this.listproductAdmin = [];
        this.page = 1;
        this.labels = {
            previousLabel: '',
            nextLabel: ''
        };
    }
    AdminProductComponent.prototype.ngOnInit = function () {
        this.getProduct();
    };
    AdminProductComponent.prototype.getProduct = function () {
        var _this = this;
        return this.AdminService.getProduct().subscribe(function (data) {
            _this.listproductAdmin = data;
        });
    };
    AdminProductComponent.prototype.deleteProduct = function (id) {
        var _this = this;
        sweetalert2_1["default"].fire({
            title: 'Bạn chắc chắn xóa không ?',
            text: "Sẽ bị xóa vĩnh viễn",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            cancelButtonText: 'Hủy',
            confirmButtonText: 'Xóa thông tin'
        }).then(function (result) {
            if (result.isConfirmed) {
                sweetalert2_1["default"].fire('Xóa thành công', 'Thông tin đã được xóa', 'success');
                _this.AdminService.deleteProduct(id).subscribe(function (data) {
                    _this.listproductAdmin = _this.listproductAdmin.filter(function (item) {
                        return item.id != id;
                    });
                    _this.toastr.success('Xóa thành công', 'thông báo');
                });
            }
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
