"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.DangnhapComponent = void 0;
var core_1 = require("@angular/core");
var sweetalert2_1 = require("sweetalert2");
var forms_1 = require("@angular/forms");
var DangnhapComponent = /** @class */ (function () {
    function DangnhapComponent(location, formBuilder, Router) {
        this.location = location;
        this.formBuilder = formBuilder;
        this.Router = Router;
        this.submitted = false;
    }
    DangnhapComponent.prototype.ngOnInit = function () {
        this.form = this.formBuilder.group({
            email: ['', [forms_1.Validators.required, forms_1.Validators.email]],
            password: [
                '',
                [
                    forms_1.Validators.required,
                    forms_1.Validators.minLength(6),
                    forms_1.Validators.maxLength(40)
                ]
            ]
        });
    };
    Object.defineProperty(DangnhapComponent.prototype, "f", {
        get: function () {
            return this.form.controls;
        },
        enumerable: false,
        configurable: true
    });
    DangnhapComponent.prototype.backClicked = function () {
        this.location.back();
    };
    DangnhapComponent.prototype.OnSubmit = function () {
        this.submitted = true;
        if (this.form.invalid) {
            return;
        }
        else {
            this.Router.navigateByUrl('/web/product-announ');
        }
    };
    DangnhapComponent.prototype.onclickgg = function () {
        sweetalert2_1["default"].fire({
            title: 'Xin lỗi bất tiện này',
            text: "Tính năng chưa phát triển",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            cancelButtonText: 'Quay lại',
            confirmButtonText: 'Thử lại sau'
        }).then(function (result) {
            if (result.isConfirmed) {
                sweetalert2_1["default"].fire('Thank you', 'Chúng tôi sẽ cập nhật sớm nhất', 'success');
            }
        });
    };
    DangnhapComponent = __decorate([
        core_1.Component({
            selector: 'app-dangnhap',
            templateUrl: './dangnhap.component.html',
            styleUrls: ['./dangnhap.component.scss']
        })
    ], DangnhapComponent);
    return DangnhapComponent;
}());
exports.DangnhapComponent = DangnhapComponent;
