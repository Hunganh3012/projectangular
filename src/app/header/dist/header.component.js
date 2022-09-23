"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.HeaderComponent = void 0;
var core_1 = require("@angular/core");
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(authService, adminService) {
        var _this = this;
        this.authService = authService;
        this.adminService = adminService;
        this.isShow = false;
        this.isShowLogIn = true;
        this.isShowLogOut = false;
        this.isShowClose = true;
        this.totalItem = 0;
        this.numberProduct = [];
        this.productCart = [];
        this.CartDetailheader = [];
        this.getCartDetail = [];
        // -----------------------Log In & Log Out--------------------------
        this.isDisplay = true;
        this.adminService.cartSubject.subscribe(function (data) {
            _this.totalItem = data;
        });
        this.adminService.productmini.subscribe(function (data) {
            _this.CartDetailheader = data;
        });
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.adminService.loadCart();
        this.cartDetail();
        this.adminService.getProduct().subscribe(function (res) {
            _this.numberProduct.push(res);
            _this.cartItemFunc();
        });
        this.adminService.getProduct().subscribe(function (res) {
            _this.productCart.push(res);
            _this.productItemFunc();
        });
    };
    Object.defineProperty(HeaderComponent.prototype, "Totals", {
        get: function () {
            return this.CartDetailheader.reduce(function (sum, x) { return ({
                qtyTotal: 1,
                priceold: sum.priceold + x.qtyTotal * x.priceold
            }); }, { qtyTotal: 1, priceold: 0 }).priceold;
        },
        enumerable: false,
        configurable: true
    });
    HeaderComponent.prototype.cartItemFunc = function () {
        var _a;
        this.totalItem = (_a = this.getCartItemFromLocal().length) !== null && _a !== void 0 ? _a : 0;
    };
    HeaderComponent.prototype.productItemFunc = function () {
        this.CartDetailheader = this.getProductItemFromLocal();
    };
    // qtyCarts(){
    //   this
    // }
    HeaderComponent.prototype.getCartItemFromLocal = function () {
        var data = localStorage.getItem('cart-item');
        if (!data)
            return;
        return JSON.parse(data);
    };
    HeaderComponent.prototype.getProductItemFromLocal = function () {
        var data = localStorage.getItem('cart-item');
        if (!data)
            return;
        return JSON.parse(data);
    };
    Object.defineProperty(HeaderComponent.prototype, "Total", {
        get: function () {
            return this.getCartDetail.reduce(function (sum, x) { return ({
                qtyTotal: 1,
                priceold: sum.priceold + x.qtyTotal * x.priceold
            }); }, { qtyTotal: 1, priceold: 0 }).priceold;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HeaderComponent.prototype, "totalItems", {
        get: function () {
            return this.getCartItemFromLocal.length;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HeaderComponent.prototype, "productItems", {
        get: function () {
            return this.getProductItemFromLocal;
        },
        enumerable: false,
        configurable: true
    });
    HeaderComponent.prototype.cartDetail = function () {
        if (localStorage.getItem('cart-item')) {
            this.getCartDetail = JSON.parse(localStorage.getItem('cart-item') || '{}');
        }
    };
    HeaderComponent.prototype.clickToggle = function () {
        this.isDisplay = !this.isDisplay;
    };
    HeaderComponent.prototype.logIn = function () {
        this.authService.logIn();
        this.isShow = true;
        this.isShowLogIn = false;
        this.isShowLogOut = true;
    };
    HeaderComponent.prototype.logOut = function () {
        this.authService.logOut();
        this.isShowLogOut = false;
        this.isShowLogIn = true;
        this.isShow = false;
    };
    HeaderComponent.prototype.close = function () {
        this.authService.close();
        this.isShowClose = false;
    };
    HeaderComponent.prototype.open = function () {
        this.authService.open();
        this.isShowClose = true;
    };
    HeaderComponent = __decorate([
        core_1.Component({
            selector: 'app-header',
            templateUrl: './header.component.html',
            styleUrls: ['./header.component.scss']
        })
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;
