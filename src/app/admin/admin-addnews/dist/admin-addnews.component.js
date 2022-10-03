"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AdminAddnewsComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var AdminAddnewsComponent = /** @class */ (function () {
    function AdminAddnewsComponent(newsService, formBuilder) {
        this.newsService = newsService;
        this.formBuilder = formBuilder;
        this.formControlExample = new forms_1.FormControl(20);
        this.submitted = false;
        this.listadd = {
            image: '',
            name: '',
            days: '',
            athour: ''
        };
    }
    AdminAddnewsComponent.prototype.ngOnInit = function () {
        this.form = this.formBuilder.group({
            nameproduct: ['', [forms_1.Validators.required, forms_1.Validators.minLength(6)]],
            // linkphoto: ['',[Validators.required,Validators.minLength(6),]],
            priceold: ['', [forms_1.Validators.required, forms_1.Validators.pattern("[0-9 ]{2,10}")]],
            sale: ['', [forms_1.Validators.required, forms_1.Validators.pattern("[0-9 ]{1,2}")]],
            detail: ['', [forms_1.Validators.required, forms_1.Validators.minLength(6),]],
            acceptTerms: [false, forms_1.Validators.requiredTrue]
        });
    };
    Object.defineProperty(AdminAddnewsComponent.prototype, "f", {
        get: function () {
            return this.form.controls;
        },
        enumerable: false,
        configurable: true
    });
    AdminAddnewsComponent.prototype.OnSubmit = function () {
    };
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
