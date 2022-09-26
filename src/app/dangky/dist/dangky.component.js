"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.DangkyComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var DangkyComponent = /** @class */ (function () {
    function DangkyComponent(formBuilder) {
        this.formBuilder = formBuilder;
        this.submitted = false;
        this.show = false;
    }
    DangkyComponent.prototype.ngOnInit = function () {
        this.password = 'password';
        this.form = this.formBuilder.group({
            firstname: ['', [forms_1.Validators.required, forms_1.Validators.minLength(6)]],
            lastname: ['', [forms_1.Validators.required, forms_1.Validators.minLength(6),]],
            email: ['', [forms_1.Validators.required, forms_1.Validators.email]],
            password: [
                '',
                [
                    forms_1.Validators.required,
                    forms_1.Validators.minLength(6),
                    forms_1.Validators.maxLength(40)
                ]
            ],
            confirmPassword: ['', forms_1.Validators.required]
        }, {
            validator: this.ConfirmedValidator('password', 'confirmPassword')
        });
    };
    Object.defineProperty(DangkyComponent.prototype, "f", {
        get: function () {
            return this.form.controls;
        },
        enumerable: false,
        configurable: true
    });
    DangkyComponent.prototype.OnSubmit = function () {
        this.submitted = true;
    };
    DangkyComponent.prototype.ConfirmedValidator = function (controlName, matchingControlName) {
        return function (formGroup) {
            var control = formGroup.controls[controlName];
            var matchingControl = formGroup.controls[matchingControlName];
            if (matchingControl.errors &&
                !matchingControl.errors['confirmedValidator']) {
                return;
            }
            if (control.value !== matchingControl.value) {
                matchingControl.setErrors({ confirmedValidator: true });
            }
            else {
                matchingControl.setErrors(null);
            }
        };
    };
    DangkyComponent.prototype.clickeyes = function () {
        if (this.password === 'password') {
            this.password = 'text';
            this.show = true;
        }
        else {
            this.password = 'password';
            this.show = false;
        }
    };
    DangkyComponent = __decorate([
        core_1.Component({
            selector: 'app-dangky',
            templateUrl: './dangky.component.html',
            styleUrls: ['./dangky.component.scss']
        })
    ], DangkyComponent);
    return DangkyComponent;
}());
exports.DangkyComponent = DangkyComponent;
