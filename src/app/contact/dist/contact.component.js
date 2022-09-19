"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ContactComponent = void 0;
var core_1 = require("@angular/core");
var ContactComponent = /** @class */ (function () {
    function ContactComponent(AppService, router, toastr) {
        this.AppService = AppService;
        this.router = router;
        this.toastr = toastr;
        this.submitted = false;
        this.list = {
            lastname: '',
            firstname: '',
            phone: '',
            email: '',
            content: '',
            time: ''
        };
    }
    ContactComponent.prototype.ngOnInit = function () {
        // this.form = this.fb.group(
        //   {
        //     lastname: ['', [Validators.required,Validators.minLength(2)]],
        //     firstname: ['',[Validators.required,Validators.minLength(2),]],
        //     priceold: ['', [Validators.required,Validators.pattern("[0-9 ]{2,10}")]],
        //     sale: ['', [Validators.required, Validators.pattern("[0-9 ]{1,2}")]],
        //     detail: ['', [Validators.required, Validators.minLength(6),]],
        //     acceptTerms: [false, Validators.requiredTrue]
        //   },
        // );
    };
    ContactComponent.prototype.postContent = function () {
        var _this = this;
        var today = new Date();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var date = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();
        var timedate = time + " " + date;
        this.list.time = timedate;
        console.log(timedate);
        this.toastr.success('Sửa thành công', 'thông báo');
        this.AppService.postContent(this.list).subscribe(function (data) {
            _this.router.navigateByUrl('/');
        });
    };
    ContactComponent.prototype.OnSubmit = function () {
        this.submitted = true;
    };
    ContactComponent = __decorate([
        core_1.Component({
            selector: 'app-contact',
            templateUrl: './contact.component.html',
            styleUrls: ['./contact.component.scss']
        })
    ], ContactComponent);
    return ContactComponent;
}());
exports.ContactComponent = ContactComponent;
