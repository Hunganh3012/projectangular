"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ProductAnnounComponent = void 0;
var core_1 = require("@angular/core");
var ProductAnnounComponent = /** @class */ (function () {
    function ProductAnnounComponent(AdminService, Router, route) {
        this.AdminService = AdminService;
        this.Router = Router;
        this.route = route;
        this.productListcart = [];
        this.listProduct = [];
        this.listProductHighlight = [];
        this.slidesStore = [];
        // listCart={
        //   name:'',
        //   priceold:'',
        //   sale:'',
        //   img:'',
        // };
        this.getFourProduct = [];
        this.page = 1;
        this.productincart = [];
        this.customOptions = {
            loop: true,
            mouseDrag: true,
            touchDrag: true,
            pullDrag: false,
            dots: false,
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
        this.products = [];
        this.cartNumber = 0;
        this.productcart = [];
    }
    ProductAnnounComponent.prototype.ngOnInit = function () {
        this.getProduct();
        this.getProductHighlight();
        this.cartDetail();
    };
    ProductAnnounComponent.prototype.addtowlist = function (item) {
        this.AdminService.addtowishlist(item);
        alert('Đã thêm vào mục sản phẩm yêu thích');
    };
    ProductAnnounComponent.prototype.getProduct = function () {
        var _this = this;
        return this.AdminService.getProduct().subscribe(function (data) {
            _this.listProduct = data;
            _this.totalLength = data.length;
            // console.log(this.listProduct)
        });
    };
    ProductAnnounComponent.prototype.getProductHighlight = function () {
        var _this = this;
        return this.AdminService.getProduct().subscribe(function (data) {
            // console.log(data.splice(5,9))
            _this.listProductHighlight = data.splice(5, 4);
        });
    };
    ProductAnnounComponent.prototype.cartDetail = function () {
        if (localStorage.getItem('cart-item')) {
            this.products = JSON.parse(localStorage.getItem('cart-item') || '{}');
            console.log(this.products);
        }
    };
    ProductAnnounComponent.prototype.Desc = function (prod) {
        if (prod.qtyTotal != 0) {
            prod.qtyTotal -= 1;
        }
    };
    ProductAnnounComponent.prototype.Insc = function (prod) {
        if (prod.qtyTotal != 10) {
            prod.qtyTotal += 1;
        }
    };
    ProductAnnounComponent.prototype.addtoCart = function (product) {
        product.qtyTotal += 1;
        // console.log(item);
        // localStorage.setItem('cart-item',JSON.stringify(item))
        this.AdminService.addtoCart(product);
        this.cartNumberFunc();
        this.productNumberFunc();
    };
    ProductAnnounComponent.prototype.cartNumberFunc = function () {
        var cartValue = JSON.parse(localStorage.getItem('cart-item') || '{}');
        this.cartNumber = cartValue.length;
        this.AdminService.cartSubject.next(this.cartNumber);
    };
    ProductAnnounComponent.prototype.productNumberFunc = function () {
        var productValue = JSON.parse(localStorage.getItem('cart-item') || '{}');
        this.productcart = productValue;
        this.AdminService.productmini.next(this.productcart);
    };
    ProductAnnounComponent = __decorate([
        core_1.Component({
            selector: 'app-product-announ',
            templateUrl: './product-announ.component.html',
            styleUrls: ['./product-announ.component.scss']
        })
    ], ProductAnnounComponent);
    return ProductAnnounComponent;
}());
exports.ProductAnnounComponent = ProductAnnounComponent;
