"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppComponent = void 0;
var core_1 = require("@angular/core");
var sweetalert2_1 = require("sweetalert2");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Bán nước giải khát';
    }
    AppComponent.prototype.ngOnInit = function () {
        sweetalert2_1["default"].fire({
            title: '<p style="font-size:20px; padding-top:20px">Vui lòng nhập họ tên và xác nhận bạn đã đủ 18 tuổi để tiếp tục (theo quy định khi mua rượu bia)</p>',
            input: 'text',
            imageUrl: 'https://images.unsplash.com/photo-1441985969846-3e7c90531139?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGJlZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
            imageWidth: 500,
            imageHeight: 300,
            // html:'<input type="text" placeholder="Họ và tên *" style="outline:none; padding: 0 5px;width:100%; height:50px ;border: 1px solid #e9eaeb">',
            showCancelButton: false,
            confirmButtonText: 'Tôi trên 18 tuổi',
            cancelButtonText: 'Tôi ',
            showLoaderOnConfirm: true
        });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.scss']
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
