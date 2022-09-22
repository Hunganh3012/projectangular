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
var $ = require("jquery");
var forms_1 = require("@angular/forms");
var AdminEditproductComponent = /** @class */ (function () {
    function AdminEditproductComponent(AdminService, route, Router, toastr, uploadfileService) {
        this.AdminService = AdminService;
        this.route = route;
        this.Router = Router;
        this.toastr = toastr;
        this.uploadfileService = uploadfileService;
        this.formControlExample = new forms_1.FormControl(20);
        this.edit = [];
        this.url = this.edit.img;
        this.file = [];
        this.filebefore = [];
    }
    AdminEditproductComponent.prototype.ngOnInit = function () {
        $(function () {
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
        console.log(this.file);
        var imageapi;
        //UPLOAD FILE
        var file_data = this.file[0];
        var data = new FormData();
        data.append('file', file_data);
        data.append('upload_preset', 'project-angular');
        data.append('cloud_name', 'db1zqfcad');
        this.uploadfileService.upload(data).subscribe(function (response) {
            console.log(response);
            imageapi = response.secure_url;
            _this.edit.img = imageapi;
            //Sửa sản phâ
            _this.AdminService.updateProduct(_this.edit.id, _this.edit).subscribe(function (data) {
                _this.Router.navigateByUrl('/admin/admin-product');
            });
            _this.toastr.success('Sửa thành công', 'thông báo');
        });
    };
    AdminEditproductComponent.prototype.onSelect = function (event) {
        var _a;
        console.log(event);
        (_a = this.file).push.apply(_a, event.addedFiles);
        console.log(this.file);
    };
    AdminEditproductComponent.prototype.onRemove = function (event) {
        console.log(event);
        this.file.splice(this.file.indexOf(event), 1);
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
