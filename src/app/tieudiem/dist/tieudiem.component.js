"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.TieudiemComponent = void 0;
var core_1 = require("@angular/core");
var TieudiemComponent = /** @class */ (function () {
    function TieudiemComponent(newsService) {
        this.newsService = newsService;
        this.customOptions = {
            loop: true,
            mouseDrag: true,
            touchDrag: true,
            pullDrag: false,
            dots: true,
            navSpeed: 700,
            navText: [
                '<i class="fa-solid fa-angle-left "></i>',
                '<i class="fa-solid fa-angle-right"></i>',
            ],
            responsive: {
                0: {
                    items: 1
                },
                400: {
                    items: 1
                },
                740: {
                    items: 1
                },
                940: {
                    items: 1
                }
            },
            nav: true
        };
        this.listNews = [];
        this.listNewsSlide = [];
        this.page = 1;
        this.labels = {
            previousLabel: '',
            nextLabel: ''
        };
        this.loader = true;
    }
    TieudiemComponent.prototype.ngOnInit = function () {
        this.getNews();
        this.getNewsSlide();
    };
    TieudiemComponent.prototype.getNews = function () {
        var _this = this;
        return this.newsService.getNews().subscribe(function (data) {
            setTimeout(function () {
                _this.listNews = data;
                _this.loader = false;
            }, 1000);
        });
    };
    TieudiemComponent.prototype.getNewsSlide = function () {
        var _this = this;
        return this.newsService.getNews().subscribe(function (data) {
            _this.listNewsSlide = data.slice(0, 4);
            console.log(_this.listNewsSlide);
        });
    };
    TieudiemComponent = __decorate([
        core_1.Component({
            selector: 'app-tieudiem',
            templateUrl: './tieudiem.component.html',
            styleUrls: ['./tieudiem.component.scss']
        })
    ], TieudiemComponent);
    return TieudiemComponent;
}());
exports.TieudiemComponent = TieudiemComponent;
