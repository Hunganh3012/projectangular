"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AdminAddproductComponent = void 0;
var core_1 = require("@angular/core");
var file_upload_service_1 = require("src/app/file-upload.service");
var ClassicEditor = require("@ckeditor/ckeditor5-build-classic");
var forms_1 = require("@angular/forms");
var AdminAddproductComponent = /** @class */ (function () {
    function AdminAddproductComponent(AdminService, Router, toastr, formBuilder, uploadfileService) {
        this.AdminService = AdminService;
        this.Router = Router;
        this.toastr = toastr;
        this.formBuilder = formBuilder;
        this.uploadfileService = uploadfileService;
        this.editor = ClassicEditor;
        this.data = '';
        this.count = 0;
        this.rate = 5000;
        this.lastClick = Date.now() - this.rate;
        this.formControlExample = new forms_1.FormControl(20);
        this.value = 0;
        this.listadd = {
            name: '',
            sale: '',
            priceold: '',
            detail: '',
            img: ''
        };
        this.submitted = false;
        //Upload File
        this.file = [];
    }
    AdminAddproductComponent.prototype.ngOnInit = function () {
        this.form = this.formBuilder.group({
            nameproduct: ['', [forms_1.Validators.required, forms_1.Validators.minLength(6)]],
            // linkphoto: ['',[Validators.required,Validators.minLength(6),]],
            priceold: ['', [forms_1.Validators.required, forms_1.Validators.pattern("[0-9 ]{2,10}")]],
            sale: ['', [forms_1.Validators.required, forms_1.Validators.pattern("[0-9 ]{1,2}")]],
            acceptTerms: [false, forms_1.Validators.requiredTrue]
        });
        //UPLOAD FILE
    };
    Object.defineProperty(AdminAddproductComponent.prototype, "f", {
        get: function () {
            return this.form.controls;
        },
        enumerable: false,
        configurable: true
    });
    AdminAddproductComponent.prototype.OnSubmit = function () {
        var _this = this;
        this.submitted = true;
        var imageapi = '';
        if (Date.now() - this.lastClick >= this.rate) {
            console.log("Clicked " + ++this.count + " times");
            this.lastClick = Date.now();
            if (this.form.valid) {
                var file_data = this.file[0];
                var data = new FormData();
                data.append('file', file_data);
                data.append('upload_preset', 'project-angular');
                data.append('cloud_name', 'db1zqfcad');
                this.uploadfileService.upload(data).subscribe(function (response) {
                    imageapi = response.secure_url;
                    _this.listadd.img = imageapi;
                    _this.AdminService.addProduct(_this.listadd).subscribe(function (data) {
                        _this.Router.navigateByUrl('/admin/admin-product');
                        _this.toastr.success('Thêm thành công', 'thông báo');
                    });
                });
                //Success add product
            }
            else {
                this.toastr.error('Vui lòng nhập thông tin', 'thông báo');
                return;
            }
        }
        //Upload FILE
    };
    AdminAddproductComponent.prototype.onChange = function ($event) {
        console.log("onChange");
        //this.log += new Date() + "<br />";
    };
    AdminAddproductComponent.prototype.onPaste = function ($event) {
        console.log("onPaste");
        //this.log += new Date() + "<br />";
    };
    AdminAddproductComponent.prototype.onSelect = function (event) {
        var _a;
        console.log(event);
        (_a = this.file).push.apply(_a, event.addedFiles);
    };
    AdminAddproductComponent.prototype.onRemove = function (event) {
        console.log(event);
        this.file.splice(this.file.indexOf(event), 1);
    };
    AdminAddproductComponent = __decorate([
        core_1.Component({
            selector: 'app-admin-addproduct',
            templateUrl: './admin-addproduct.component.html',
            styleUrls: ['./admin-addproduct.component.scss'],
            providers: [file_upload_service_1.FileUploadService]
        })
    ], AdminAddproductComponent);
    return AdminAddproductComponent;
}());
exports.AdminAddproductComponent = AdminAddproductComponent;
