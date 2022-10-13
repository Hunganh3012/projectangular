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
var forms_1 = require("@angular/forms");
var ContactComponent = /** @class */ (function () {
    function ContactComponent(AppService, router, toastr, fb) {
        this.AppService = AppService;
        this.router = router;
        this.toastr = toastr;
        this.fb = fb;
        this.count = 0;
        this.rate = 5000;
        this.lastClick = Date.now() - this.rate;
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
        this.form = this.fb.group({
            lastname: ['', [forms_1.Validators.required, forms_1.Validators.minLength(2)]],
            firstname: ['', [forms_1.Validators.required, forms_1.Validators.minLength(2),]],
            phonenum: ['', [forms_1.Validators.required, forms_1.Validators.pattern("[0-9 ]{10}")]],
            email: ['', [forms_1.Validators.required, forms_1.Validators.email]],
            detail: ['', [forms_1.Validators.required, forms_1.Validators.minLength(3),]]
        });
    };
    Object.defineProperty(ContactComponent.prototype, "f", {
        // postContent(){
        // }
        get: function () {
            return this.form.controls;
        },
        enumerable: false,
        configurable: true
    });
    ContactComponent.prototype.OnSubmit = function () {
        this.submitted = true;
        if (Date.now() - this.lastClick >= this.rate) {
            console.log("Clicked " + ++this.count + " times");
            this.lastClick = Date.now();
            if (this.form.valid) {
                var today = new Date();
                var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
                var date = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();
                var timedate = time + " " + date;
                this.list.time = timedate;
                console.log(timedate);
                this.toastr.success('Gửi thành công', 'thông báo');
                this.AppService.postContent(this.list).subscribe(function (data) {
                });
                this.router.navigateByUrl('/');
            }
            else {
                this.toastr.error('Vui lòng nhập thông tin', 'thông báo');
                return;
            }
        }
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
