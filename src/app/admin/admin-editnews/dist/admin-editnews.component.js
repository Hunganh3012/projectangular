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
var AdminEditnewsComponent = /** @class */ (function () {
    function AdminEditnewsComponent() {
        this.edit = [];
        //Upload File
        this.file = [];
    }
    AdminEditnewsComponent.prototype.ngOnInit = function () {
    };
    AdminEditnewsComponent.prototype.OnSubmit = function () {
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
