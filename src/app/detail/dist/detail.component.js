"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.DetailComponent = void 0;
var core_1 = require("@angular/core");
var DetailComponent = /** @class */ (function () {
    function DetailComponent(AdminService, route, Router) {
        this.AdminService = AdminService;
        this.route = route;
        this.Router = Router;
        this.cartNumber = 0;
        this.cartDetailHeader = '';
        this.detail = [];
    }
    DetailComponent.prototype.ngOnInit = function () {
        this.productDetail();
    };
    DetailComponent.prototype.addtocart = function (item) {
        item.qtyTotal = 1;
        this.AdminService.addtoCart(item);
        this.cartNumberFunc();
        this.cartDetailheaderFunc();
    };
    DetailComponent.prototype.cartNumberFunc = function () {
        var cartValue = JSON.parse(localStorage.getItem('cart-item') || '{}');
        this.cartNumber = cartValue.length;
        this.AdminService.cartSubject.next(this.cartNumber);
    };
    DetailComponent.prototype.cartDetailheaderFunc = function () {
        var cartValue = JSON.parse(localStorage.getItem('cart-item') || '{}');
        this.cartDetailHeader = cartValue;
        console.log(this.cartDetailHeader);
        this.AdminService.productmini.next(this.cartDetailHeader);
    };
    DetailComponent.prototype.productDetail = function () {
        var _this = this;
        this.route.params.subscribe(function (data) {
            _this.AdminService.getDetailProduct(data.id).subscribe(function (data) {
                _this.detail = data;
                console.log(_this.detail);
            });
        });
    };
    DetailComponent = __decorate([
        core_1.Component({
            selector: 'app-detail',
            templateUrl: './detail.component.html',
            styleUrls: ['./detail.component.scss']
        })
    ], DetailComponent);
    return DetailComponent;
}());
exports.DetailComponent = DetailComponent;
