"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppService = void 0;
var core_1 = require("@angular/core");
var AppService = /** @class */ (function () {
    function AppService(http) {
        this.http = http;
        this.API_URL = "https://62de1ee1ccdf9f7ec2d15d4e.mockapi.io/user";
    }
    AppService.prototype.renderContent = function () {
        return this.http.get("" + this.API_URL);
    };
    AppService.prototype.postContent = function (data) {
        return this.http.post(this.API_URL, data);
    };
    AppService.prototype.deleteContent = function (id) {
        return this.http["delete"](this.API_URL + "/" + id);
    };
    AppService.prototype.deletelist = function (a) {
    };
    AppService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], AppService);
    return AppService;
}());
exports.AppService = AppService;
