"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.DasboardComponent = void 0;
var core_1 = require("@angular/core");
var $ = require("jquery");
var DasboardComponent = /** @class */ (function () {
    function DasboardComponent() {
    }
    DasboardComponent.prototype.ngOnInit = function () {
        $(function () {
            $('#sidebarCollapse').on('click', function () {
                $('#sidebar').toggleClass('active');
            });
        });
    };
    DasboardComponent = __decorate([
        core_1.Component({
            selector: 'app-dasboard',
            templateUrl: './dasboard.component.html',
            styleUrls: ['./dasboard.component.scss']
        })
    ], DasboardComponent);
    return DasboardComponent;
}());
exports.DasboardComponent = DasboardComponent;
