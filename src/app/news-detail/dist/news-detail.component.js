"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.NewsDetailComponent = void 0;
var core_1 = require("@angular/core");
var NewsDetailComponent = /** @class */ (function () {
    function NewsDetailComponent(route, router, newsService) {
        this.route = route;
        this.router = router;
        this.newsService = newsService;
        this.newsDetail = [];
        this.newsrecent = [];
        this.listnews3item = [];
        this.newsDetail.detail = '<img';
    }
    NewsDetailComponent.prototype.ngOnInit = function () {
        this.getNewsDetail();
        this.Newsrecent();
        this.listNews3item();
    };
    NewsDetailComponent.prototype.getNewsDetail = function () {
        var _this = this;
        this.route.params.subscribe(function (data) {
            _this.newsService.newsDetail(data.id).subscribe(function (data) {
                _this.newsDetail = data;
                console.log(_this.newsDetail);
            });
        });
    };
    NewsDetailComponent.prototype.Newsrecent = function () {
        var _this = this;
        return this.newsService.getNews().subscribe(function (data) {
            _this.newsrecent = data.reverse()[0];
        });
    };
    NewsDetailComponent.prototype.listNews3item = function () {
        var _this = this;
        return this.newsService.getNews().subscribe(function (data) {
            _this.listnews3item = data.reverse().splice(1, 4);
        });
    };
    NewsDetailComponent = __decorate([
        core_1.Component({
            selector: 'app-news-detail',
            templateUrl: './news-detail.component.html',
            styleUrls: ['./news-detail.component.scss']
        })
    ], NewsDetailComponent);
    return NewsDetailComponent;
}());
exports.NewsDetailComponent = NewsDetailComponent;
