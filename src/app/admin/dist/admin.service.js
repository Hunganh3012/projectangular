"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AdminService = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var AdminService = /** @class */ (function () {
    function AdminService(http) {
        this.http = http;
        this.items = [];
        this.listProduct = [];
        this.API_Product = "https://62de1ee1ccdf9f7ec2d15d4e.mockapi.io/product";
        this.hideSubject = new rxjs_1.Subject();
        this.OpenLoginService = new rxjs_1.Subject();
        this.cartSubject = new rxjs_1.Subject();
        this.productmini = new rxjs_1.Subject();
        this.updateQtycart = new rxjs_1.Subject();
        //Ban đầu
        //----------------------------Sản phẩm yêu thích--------------------------
        this.wlistItem = [];
        // ---------------------------Giỏ hàng---------------------------------------
        this.cartItemList = [];
    }
    // API_Cart ="http://localhost:3000/cart" 
    AdminService.prototype.getProduct = function () {
        return this.http.get("" + this.API_Product);
    };
    AdminService.prototype.addProduct = function (data) {
        return this.http.post(this.API_Product, data);
    };
    AdminService.prototype.deleteProduct = function (id) {
        return this.http["delete"](this.API_Product + "/" + id);
    };
    AdminService.prototype.getDetailProduct = function (id) {
        return this.http.get(this.API_Product + "/" + id);
    };
    AdminService.prototype.updateProduct = function (id, data) {
        return this.http.put(this.API_Product + "/" + id, data);
    };
    AdminService.prototype.porductdetail = function (id) {
        return this.http.get(this.API_Product + "/" + id);
    };
    AdminService.prototype.addtowishlist = function (wlist) {
        console.log(wlist);
        var cartDataNull = localStorage.getItem('wlist-item');
        if (cartDataNull == null) {
            var storeDataGet = [];
            storeDataGet.push(wlist);
            localStorage.setItem('wlist-item', JSON.stringify(storeDataGet));
        }
        else {
            var id = wlist.id;
            var index = -1;
            this.wlistItem = JSON.parse(localStorage.getItem('wlist-item') || '{}');
            for (var i = 0; i < this.wlistItem.length; i++) {
                if (parseInt(id) === parseInt(this.wlistItem[i].id)) {
                    index = i;
                    break;
                }
            }
            if (index == -1) {
                this.wlistItem.push(wlist);
                localStorage.setItem('wlist-item', JSON.stringify(this.wlistItem));
                console.log(this.cartItemList);
            }
            else {
                localStorage.setItem('wlist-item', JSON.stringify(this.wlistItem));
            }
        }
    };
    AdminService.prototype.itemInWlist = function (item) {
        return this.wlistItem.findIndex(function (o) { return o.id === item.id; }) > -1;
    };
    AdminService.prototype.getwlist = function () {
        return this.wlistItem;
    };
    AdminService.prototype.savewlist = function () {
        localStorage.setItem('wlist-item', JSON.stringify(this.wlistItem));
    };
    AdminService.prototype.clearwlist = function (items) {
        this.wlistItem = [];
        localStorage.removeItem("wlist-item");
    };
    AdminService.prototype.removewlist = function (item) {
        if (localStorage.getItem('wlist-item')) {
            this.wlistItem = JSON.parse(localStorage.getItem('wlist-item') || '{}');
            for (var i = 0; i < this.wlistItem.length; i++) {
                if (this.wlistItem[i].id === item) {
                    this.wlistItem.splice(i, 1);
                    console.log(this.wlistItem);
                    this.savewlist();
                }
            }
        }
    };
    AdminService.prototype.loadCart = function () {
        var _a;
        this.items = (_a = JSON.parse(localStorage.getItem("cart-item") || '{}')) !== null && _a !== void 0 ? _a : [];
    };
    AdminService.prototype.addtoCart = function (product) {
        // this.cartItemList.push(product);
        // localStorage.setItem('cart-item',JSON.stringify(product))
        console.log(product);
        var cartDataNull = localStorage.getItem('cart-item');
        if (cartDataNull == null) {
            var storeDataGet = [];
            storeDataGet.push(product);
            localStorage.setItem('cart-item', JSON.stringify(storeDataGet));
        }
        else {
            var id = product.id;
            var index = -1;
            this.cartItemList = JSON.parse(localStorage.getItem('cart-item') || '{}');
            for (var i = 0; i < this.cartItemList.length; i++) {
                if (parseInt(id) === parseInt(this.cartItemList[i].id)) {
                    this.cartItemList[i].qtyTotal += 1;
                    // console.log(this.cartItemList[i].id)
                    index = i;
                    // break;
                }
            }
            if (index == -1) {
                this.cartItemList.push(product);
                console.log(this.cartItemList);
                localStorage.setItem('cart-item', JSON.stringify(this.cartItemList));
            }
            else {
                localStorage.setItem('cart-item', JSON.stringify(this.cartItemList));
            }
        }
    };
    AdminService.prototype.getItems = function () {
        return this.cartItemList;
    };
    AdminService.prototype.saveCart = function () {
        localStorage.setItem('cart-item', JSON.stringify(this.cartItemList));
    };
    AdminService.prototype.clearCart = function (items) {
        this.cartItemList = [];
        localStorage.removeItem("cart-item");
    };
    // removeItem(item:any) {
    //   const index = this.cartItemList.findIndex((o:any) => o.id === item.id);
    //   if (index > -1) {
    //     this.cartItemList.splice(index, 1);
    //     this.saveCart();
    //   }
    // }
    AdminService.prototype.removeItem = function (item) {
        if (localStorage.getItem('cart-item')) {
            this.cartItemList = JSON.parse(localStorage.getItem('cart-item') || '{}');
            for (var i = 0; i < this.cartItemList.length; i++) {
                if (this.cartItemList[i].id === item) {
                    this.cartItemList.splice(i, 1);
                    // console.log(this.cartItemList)
                    this.saveCart();
                }
            }
        }
    };
    AdminService.prototype.itemInCart = function (item) {
        return this.cartItemList.findIndex(function (o) { return o.id === item.id; }) > -1;
    };
    AdminService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], AdminService);
    return AdminService;
}());
exports.AdminService = AdminService;
