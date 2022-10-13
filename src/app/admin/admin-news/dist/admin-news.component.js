"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AdminNewsComponent = void 0;
var core_1 = require("@angular/core");
var AdminNewsComponent = /** @class */ (function () {
    function AdminNewsComponent(newsService) {
        this.newsService = newsService;
        this.listNews = [];
    }
    AdminNewsComponent.prototype.ngOnInit = function () {
        this.getNews();
    };
    AdminNewsComponent.prototype.getNews = function () {
        var _this = this;
        return this.newsService.getNews().subscribe(function (data) {
            _this.listNews = data;
        });
    };
    AdminNewsComponent = __decorate([
        core_1.Component({
            selector: 'app-admin-news',
            templateUrl: './admin-news.component.html',
            styleUrls: ['./admin-news.component.scss']
        })
    ], AdminNewsComponent);
    return AdminNewsComponent;
}());
exports.AdminNewsComponent = AdminNewsComponent;
