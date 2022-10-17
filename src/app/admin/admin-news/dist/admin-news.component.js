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
var sweetalert2_1 = require("sweetalert2");
var AdminNewsComponent = /** @class */ (function () {
    function AdminNewsComponent(newsService, toastr) {
        this.newsService = newsService;
        this.toastr = toastr;
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
    AdminNewsComponent.prototype.deleteNews = function (id) {
        var _this = this;
        sweetalert2_1["default"].fire({
            title: 'Bạn chắc chắn xóa không ?',
            text: "Sẽ bị xóa vĩnh viễn",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            cancelButtonText: 'Hủy',
            confirmButtonText: 'Xóa thông tin'
        }).then(function (result) {
            if (result.isConfirmed) {
                sweetalert2_1["default"].fire('Xóa thành công', 'Thông tin đã được xóa', 'success');
                _this.newsService.deleteNews(id).subscribe(function (data) {
                    _this.listNews = _this.listNews.filter(function (item) {
                        return item.id != id;
                    });
                    _this.toastr.success('Xóa thành công', 'thông báo');
                });
            }
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
