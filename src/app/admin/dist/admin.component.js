"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.adminComponent = void 0;
var core_1 = require("@angular/core");
var $ = require("jquery");
var adminComponent = /** @class */ (function () {
    function adminComponent() {
        // list:any=[];
        // constructor(private AppService:AppService) { }
        this.isDisplay = true;
        this.isDisplay2 = true;
        // renderContent(){
        //   return this.AppService.renderContent().subscribe(data =>{
        //     this.list=data;
        //   })
        // }
        // deleteContent(id:number){
        //   console.log(id);
        //   this.AppService.deleteContent(id).subscribe(data=>{
        //     this.list=this.list.filter((item:any) =>{
        //       return item.id !=id;
        //     })
        //     alert('Xóa thành công')
        //   })
        // }
    }
    adminComponent.prototype.clickToggle = function () {
        this.isDisplay = !this.isDisplay;
    };
    adminComponent.prototype.clickToggle2 = function () {
        this.isDisplay2 = !this.isDisplay2;
    };
    adminComponent.prototype.ngOnInit = function () {
        $(function () {
            $('#sidebarCollapse').on('click', function () {
                $('#sidebar').toggleClass('active');
            });
        });
        // this.renderContent();
    };
    adminComponent = __decorate([
        core_1.Component({
            selector: 'app-admin',
            templateUrl: './admin.component.html',
            styleUrls: ['./admin.component.scss']
        })
    ], adminComponent);
    return adminComponent;
}());
exports.adminComponent = adminComponent;