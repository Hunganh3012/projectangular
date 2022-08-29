"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CartComponent = void 0;
var core_1 = require("@angular/core");
var core_2 = require("@angular/core");
var CartComponent = /** @class */ (function () {
    function CartComponent(adminService, route, Router, currencyPipe // private builder: FormBuilder
    ) {
        this.adminService = adminService;
        this.route = route;
        this.Router = Router;
        this.currencyPipe = currencyPipe;
        this.cart = [];
        this.totalItem = 0;
        this.getCartDetail = [];
        // changeSubtotal(item:any, index:number) {
        //   const qty = item.qtyTotal;
        //   console.log(qty)
        //   const amt = item.priceold;
        //   const subTotal = amt * qty;
        //   const subTotal_converted = this.currencyPipe.transform(subTotal,"VND",'symbol','1.2-3');
        //   this.subTotalItems.toArray()[index].nativeElement.innerHTML =subTotal_converted;
        //   console.log(this.subTotalItems)
        //   this.adminService.saveCart();
        // }
        this.cartNumber = 0;
        this.qtyNum = 0;
        this.productcart = [];
    }
    CartComponent.prototype.ngOnInit = function () {
        this.adminService.loadCart();
        this.cartDetail();
    };
    CartComponent.prototype.cartDetail = function () {
        if (localStorage.getItem('cart-item')) {
            this.getCartDetail = JSON.parse(localStorage.getItem('cart-item') || '{}');
            // console.log(this.getCartDetail);
        }
    };
    CartComponent.prototype.successbuy = function () {
        this.adminService.clearCart(this.getCartDetail);
        this.Router.navigateByUrl("/");
        alert('Mua hàng thành công');
    };
    CartComponent.prototype.clearCart = function (item) {
        this.adminService.clearCart(this.getCartDetail);
        this.cartNumber = 0;
    };
    CartComponent.prototype.removeFromCart = function (item) {
        this.adminService.removeItem(item);
        this.getCartDetail = this.adminService.getItems();
        this.cartNumberFunc();
        this.productNumberFunc();
    };
    Object.defineProperty(CartComponent.prototype, "Total", {
        get: function () {
            return this.getCartDetail.reduce(function (sum, x) { return ({
                qtyTotal: 1,
                priceold: sum.priceold + x.qtyTotal * x.priceold
            }); }, { qtyTotal: 1, priceold: 0 }).priceold;
        },
        enumerable: false,
        configurable: true
    });
    CartComponent.prototype.increase = function (prod) {
        if (prod.qtyTotal != 10) {
            prod.qtyTotal += 1;
            this.adminService.updateQty(prod);
        }
        localStorage.setItem('cart-item', JSON.stringify(this.getCartDetail));
        // this.getCartDetail = this.adminService.getItem();
        // this.qtyNumberFunc(prod.qtyTotal)
    };
    CartComponent.prototype.decrease = function (prod) {
        if (prod.qtyTotal != 1) {
            prod.qtyTotal -= 1;
            this.adminService.updateQty(prod);
            // this.qtyNumberFunc();
        }
        localStorage.setItem('cart-item', JSON.stringify(this.getCartDetail));
    };
    CartComponent.prototype.cartNumberFunc = function () {
        var cartValue = JSON.parse(localStorage.getItem('cart-item') || '{}');
        this.cartNumber = cartValue.length;
        this.adminService.cartSubject.next(this.cartNumber);
        console.log(this.cartNumber);
    };
    ;
    CartComponent.prototype.qtyNumberFunc = function () {
        var _this = this;
        var cartDetail = JSON.parse(localStorage.getItem('cart-item') || '{}');
        console.log(cartDetail);
        var cartfilter = cartDetail.filter(function (data) {
            _this.qtyNum = data.qtyTotal;
            console.log(_this.qtyNum);
            _this.adminService.qty.next(_this.qtyNum);
        });
        // console.log(cartfilter)
    };
    CartComponent.prototype.productNumberFunc = function () {
        var productValue = JSON.parse(localStorage.getItem('cart-item') || '{}');
        this.productcart = productValue;
        console.log(this.productcart);
        this.adminService.productmini.next(this.productcart);
    };
    __decorate([
        core_2.ViewChildren('subTotalWrap')
    ], CartComponent.prototype, "subTotalItems");
    __decorate([
        core_2.ViewChildren('subTotalWrap_existing')
    ], CartComponent.prototype, "subTotalItems_existing");
    CartComponent = __decorate([
        core_1.Component({
            selector: 'app-cart',
            templateUrl: './cart.component.html',
            styleUrls: ['./cart.component.scss']
        })
    ], CartComponent);
    return CartComponent;
}());
exports.CartComponent = CartComponent;
