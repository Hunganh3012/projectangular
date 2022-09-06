"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AdminContactComponent = void 0;
var core_1 = require("@angular/core");
var AdminContactComponent = /** @class */ (function () {
    function AdminContactComponent(AppService) {
        this.AppService = AppService;
        this.list = [];
        this.page = 1;
        this.sum = 0;
        this.numId = 0;
    }
    AdminContactComponent.prototype.ngOnInit = function () {
        this.renderContent();
    };
    AdminContactComponent.prototype.renderContent = function () {
        var _this = this;
        return this.AppService.renderContent().subscribe(function (data) {
            _this.list = data;
        });
    };
    AdminContactComponent.prototype.deleteContent = function (id) {
        var _this = this;
        console.log(id);
        this.AppService.deleteContent(id).subscribe(function (data) {
            _this.list = _this.list.filter(function (item) {
                return item.id != id;
            });
            alert('Xóa thành công');
        });
    };
    AdminContactComponent = __decorate([
        core_1.Component({
            selector: 'app-admin-contact',
            templateUrl: './admin-contact.component.html',
            styleUrls: ['./admin-contact.component.scss']
        })
    ], AdminContactComponent);
    return AdminContactComponent;
}());
exports.AdminContactComponent = AdminContactComponent;
