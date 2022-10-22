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
    function AdminEditproductComponent(AdminService, route, Router, toastr, uploadfileService, formBuilder) {
        this.AdminService = AdminService;
        this.route = route;
        this.Router = Router;
        this.toastr = toastr;
        this.uploadfileService = uploadfileService;
        this.formBuilder = formBuilder;
        this.submitted = false;
        this.formControlExample = new forms_1.FormControl(20);
        this.edit = [];
        this.url = this.edit.img;
        this.file = [];
        this.filebefore = [];
    }
    Object.defineProperty(AdminEditproductComponent.prototype, "f", {
        get: function () {
            return this.form.controls;
        },
        enumerable: false,
        configurable: true
    });
    AdminEditproductComponent.prototype.ngOnInit = function () {
        this.form = this.formBuilder.group({
            nameproduct: ['', [forms_1.Validators.required, forms_1.Validators.minLength(6)]],
            priceold: ['', [forms_1.Validators.required, forms_1.Validators.pattern("[0-9 ]{2,10}")]],
            sale: ['', [forms_1.Validators.required, forms_1.Validators.pattern("[0-9 ]{1,2}")]]
        });
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
            _this.AdminService.getDetailProduct(data.id).subscribe(function (data) {
                _this.edit = data;
            });
        });
    };
    AdminEditproductComponent.prototype.OnSubmit = function () {
        var _this = this;
        this.submitted = true;
        var imageapi;
        //UPLOAD FILE
        if (this.form.valid) {
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
                    _this.toastr.success('Sửa thành công', 'thông báo');
                });
            });
        }
    };
    AdminEditproductComponent.prototype.onChange = function ($event) {
        console.log("onChange");
        //this.log += new Date() + "<br />";
    };
    AdminEditproductComponent.prototype.onPaste = function ($event) {
        console.log("onPaste");
        //this.log += new Date() + "<br />";
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
