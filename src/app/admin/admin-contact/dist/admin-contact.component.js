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
var sweetalert2_1 = require("sweetalert2");
var AdminContactComponent = /** @class */ (function () {
    function AdminContactComponent(AppService, toastr) {
        this.AppService = AppService;
        this.toastr = toastr;
        this.list = [];
        this.page = 1;
        this.selectlist = [];
        this.labels = {
            previousLabel: '',
            nextLabel: ''
        };
        this.sum = 0;
        this.numId = 0;
        this.parentSelector = false;
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
                _this.toastr.success('Xóa thành công', 'thông báo');
                _this.AppService.deleteContent(id).subscribe(function (data) {
                    _this.list = _this.list.filter(function (item) {
                        return item.id != id;
                    });
                });
            }
        });
    };
    AdminContactComponent.prototype.onChangelist = function ($event) {
        var _this = this;
        var listid = $event.target.value;
        var isChecked = $event.target.checked;
        this.list = this.list.filter(function (d) {
            if (d.id == listid) {
                d.select = isChecked;
                console.log(d);
            }
            if (listid == -1) {
                d.select = _this.parentSelector;
                return d;
            }
            return d;
        });
    };
    AdminContactComponent.prototype.deleteChoose = function () {
        var _this = this;
        //list: là danh sach khách hàng;
        this.list = this.list.forEach(function (e) {
            if (e.select == true) {
                _this.selectlist.push(e);
            }
        });
        console.log(this.selectlist);
        //this.selectlist: là mảng mới gồm các obj được click checkbox.
        //bên phần Service:
        // deleteContent(id:number){
        //   return this.http.delete(`${this.API_URL}/${id}`)
        // }
        // this.selectlist=this.selectlist.forEach((item:any) =>{
        //   this.AppService.deleteContent(item.id).subscribe((data)=>{
        //     this.list=this.list.filter((e:any) =>{
        //       return e.id !=item.id;
        //     })
        //   })
        // })
    };
    AdminContactComponent.prototype.clearAll = function () {
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
