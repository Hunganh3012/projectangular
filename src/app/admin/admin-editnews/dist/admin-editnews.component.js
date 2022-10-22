"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AdminEditnewsComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var ClassicEditor = require("@ckeditor/ckeditor5-build-classic");
var AdminEditnewsComponent = /** @class */ (function () {
    function AdminEditnewsComponent(newsService, route, formBuilder, toastr, router, uploadfileService) {
        this.newsService = newsService;
        this.route = route;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.router = router;
        this.uploadfileService = uploadfileService;
        this.edit = [];
        this.Editor = ClassicEditor;
        this.log = '';
        this.componentEvents = [];
        this.formControlExample = new forms_1.FormControl(20);
        this.submitted = false;
        this.listadd = {
            image: '',
            name: '',
            days: '',
            athour: ''
        };
        //Upload File
        this.file = [];
    }
    Object.defineProperty(AdminEditnewsComponent.prototype, "f", {
        get: function () {
            return this.form.controls;
        },
        enumerable: false,
        configurable: true
    });
    AdminEditnewsComponent.prototype.ngOnInit = function () {
        this.form = this.formBuilder.group({
            nameproduct: ['', [forms_1.Validators.required, forms_1.Validators.minLength(6)]]
        });
        this.getNews();
    };
    AdminEditnewsComponent.prototype.getNews = function () {
        var _this = this;
        this.route.params.subscribe(function (data) {
            _this.newsService.newsDetail(data.id).subscribe(function (data) {
                _this.listadd = data;
            });
            console.log(_this.listadd);
        });
    };
    AdminEditnewsComponent.prototype.OnSubmit = function () {
        var _this = this;
        this.submitted = true;
        var imageapi = '';
        if (this.form.valid) {
            var file_data = this.file[0];
            var data = new FormData();
            data.append('file', file_data);
            data.append('upload_preset', 'project-angular');
            data.append('cloud_name', 'db1zqfcad');
            this.uploadfileService.upload(data).subscribe(function (res) {
                imageapi = res.secure_url;
                _this.listadd.image = imageapi;
                _this.newsService.updateNews(_this.listadd.id, _this.listadd).subscribe(function (data) {
                    _this.router.navigateByUrl('admin/admin-news');
                    _this.toastr.success('Sửa thành công', 'thông báo');
                });
            });
        }
    };
    AdminEditnewsComponent.prototype.onChange = function ($event) {
        console.log("onChange");
        //this.log += new Date() + "<br />";
    };
    AdminEditnewsComponent.prototype.nChange = function ($event) {
        console.log("onChange");
        //this.log += new Date() + "<br />";
    };
    AdminEditnewsComponent.prototype.onPaste = function ($event) {
        console.log("onPaste");
        //this.log += new Date() + "<br />";
    };
    AdminEditnewsComponent.prototype.onSelect = function (event) {
        var _a;
        console.log(event);
        (_a = this.file).push.apply(_a, event.addedFiles);
    };
    AdminEditnewsComponent.prototype.onRemove = function (event) {
        console.log(event);
        this.file.splice(this.file.indexOf(event), 1);
    };
    AdminEditnewsComponent = __decorate([
        core_1.Component({
            selector: 'app-admin-editnews',
            templateUrl: './admin-editnews.component.html',
            styleUrls: ['./admin-editnews.component.scss']
        })
    ], AdminEditnewsComponent);
    return AdminEditnewsComponent;
}());
exports.AdminEditnewsComponent = AdminEditnewsComponent;
