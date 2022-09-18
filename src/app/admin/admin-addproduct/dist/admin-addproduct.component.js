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
var ngx_currency_1 = require("ngx-currency");
var forms_1 = require("@angular/forms");
var AdminAddproductComponent = /** @class */ (function () {
    function AdminAddproductComponent(AdminService, Router, toastr, formBuilder) {
        this.AdminService = AdminService;
        this.Router = Router;
        this.toastr = toastr;
        this.formBuilder = formBuilder;
        this.listadd = {
            name: '',
            sale: '',
            priceold: '',
            detail: '',
            img: ''
        };
        this.options = {
            prefix: 'VND',
            thousands: ',',
            decimal: '.',
            inputMode: ngx_currency_1.CurrencyMaskInputMode.NATURAL
        };
        this.submitted = false;
    }
    AdminAddproductComponent.prototype.ngOnInit = function () {
        this.form = this.formBuilder.group({
            nameproduct: ['', [forms_1.Validators.required, forms_1.Validators.minLength(6)]],
            linkphoto: [
                '',
                [
                    forms_1.Validators.required,
                    forms_1.Validators.minLength(6),
                ]
            ],
            priceold: ['', [forms_1.Validators.required, forms_1.Validators.pattern("[0-9 ]{2,10}")]],
            sale: ['', [forms_1.Validators.required, forms_1.Validators.pattern("[0-9 ]{1,2}")]],
            detail: ['', [forms_1.Validators.required, forms_1.Validators.minLength(6),]],
            confirmPassword: ['', forms_1.Validators.required],
            acceptTerms: [false, forms_1.Validators.requiredTrue]
        });
    };
    Object.defineProperty(AdminAddproductComponent.prototype, "f", {
        get: function () {
            return this.form.controls;
        },
        enumerable: false,
        configurable: true
    });
    AdminAddproductComponent.prototype.OnSubmit = function () {
        this.submitted = true;
        if (this.form.invalid) {
            return;
        }
        alert('oke');
        // this.AdminService.addProduct(this.listadd).subscribe(data =>{
        //   this.Router.navigateByUrl('/admin/admin-product')
        // })
        // this.toastr.success('Thêm thành công','thông báo');
    };
    AdminAddproductComponent = __decorate([
        core_1.Component({
            selector: 'app-admin-addproduct',
            templateUrl: './admin-addproduct.component.html',
            styleUrls: ['./admin-addproduct.component.scss']
        })
    ], AdminAddproductComponent);
    return AdminAddproductComponent;
}());
exports.AdminAddproductComponent = AdminAddproductComponent;
