"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AdminAddnewsComponent = void 0;
/// <reference types="@types/ckeditor" />
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var ClassicEditor = require("@ckeditor/ckeditor5-build-classic");
var AdminAddnewsComponent = /** @class */ (function () {
    function AdminAddnewsComponent(newsService, formBuilder, toastr, router, uploadfileService) {
        this.newsService = newsService;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.router = router;
        this.uploadfileService = uploadfileService;
        this.Editor = ClassicEditor;
        this.log = '';
        this.componentEvents = [];
        this.formControlExample = new forms_1.FormControl(20);
        this.submitted = false;
        this.listadd = {
            image: '',
            name: '',
            days: '',
            athour: '',
            time: ''
        };
        //Upload File
        this.file = [];
    }
    AdminAddnewsComponent.prototype.ngOnInit = function () {
        this.form = this.formBuilder.group({
            nameproduct: ['', [forms_1.Validators.required, forms_1.Validators.minLength(6)]]
        });
        //Ckeditor
        this.ckeConfig = {
            allowedContent: false,
            extraPlugins: 'divarea',
            forcePasteAsPlainText: true,
            removePlugins: 'exportpdf'
        };
    };
    Object.defineProperty(AdminAddnewsComponent.prototype, "f", {
        get: function () {
            return this.form.controls;
        },
        enumerable: false,
        configurable: true
    });
    AdminAddnewsComponent.prototype.OnSubmit = function () {
        var _this = this;
        this.submitted = true;
        var imageapi = '';
        if (this.form.valid) {
            var today = new Date();
            // var time = today.getHours() + ":" + today.getMinutes() +":"+ today.getSeconds();
            var date = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();
            var timedate = date;
            this.listadd.time = timedate;
            var file_data = this.file[0];
            var data = new FormData();
            data.append('file', file_data);
            data.append('upload_preset', 'project-angular');
            data.append('cloud_name', 'db1zqfcad');
            this.uploadfileService.upload(data).subscribe(function (response) {
                imageapi = response.secure_url;
                _this.listadd.image = imageapi;
                console.log(_this.listadd.image);
                _this.newsService.addNews(_this.listadd).subscribe(function (data) {
                    _this.router.navigateByUrl('admin/admin-news');
                    _this.toastr.success('Thêm thành công', 'thông báo');
                });
            });
        }
    };
    AdminAddnewsComponent.prototype.onChange = function ($event) {
        console.log("onChange");
        //this.log += new Date() + "<br />";
    };
    AdminAddnewsComponent.prototype.onPaste = function ($event) {
        console.log("onPaste");
        //this.log += new Date() + "<br />";
    };
    AdminAddnewsComponent.prototype.onSelect = function (event) {
        var _a;
        console.log(event);
        (_a = this.file).push.apply(_a, event.addedFiles);
    };
    AdminAddnewsComponent.prototype.onRemove = function (event) {
        console.log(event);
        this.file.splice(this.file.indexOf(event), 1);
    };
    __decorate([
        core_1.ViewChild("myckeditor")
    ], AdminAddnewsComponent.prototype, "ckeditor");
    AdminAddnewsComponent = __decorate([
        core_1.Component({
            selector: 'app-admin-addnews',
            templateUrl: './admin-addnews.component.html',
            styleUrls: ['./admin-addnews.component.scss']
        })
    ], AdminAddnewsComponent);
    return AdminAddnewsComponent;
}());
exports.AdminAddnewsComponent = AdminAddnewsComponent;
