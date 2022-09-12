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
    function ContactComponent(AppService, router) {
        this.AppService = AppService;
        this.router = router;
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
    };
    ContactComponent.prototype.postContent = function () {
        var _this = this;
        var today = new Date();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var date = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();
        var timedate = time + " " + date;
        this.list.time = timedate;
        console.log(timedate);
        this.AppService.postContent(this.list).subscribe(function (data) {
            alert('Gửi thành công');
            _this.router.navigateByUrl('/');
        });
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
