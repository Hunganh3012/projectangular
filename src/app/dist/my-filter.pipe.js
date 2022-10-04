"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.MyFilterPipe = void 0;
var core_1 = require("@angular/core");
var MyFilterPipe = /** @class */ (function () {
    function MyFilterPipe() {
    }
    MyFilterPipe.prototype.transform = function (items, filter) {
        if (Object.keys(filter).length == 0)
            return items;
        console.log(filter);
        var filterKeys = Object.keys(filter);
        return items.filter(function (item) {
            return filterKeys.every(function (keyName) {
                // console.log(keyName);
                return (new RegExp(filter[keyName], 'gi').test(item[keyName]) ||
                    filter[keyName] === '');
            });
        });
    };
    MyFilterPipe = __decorate([
        core_1.Pipe({
            name: 'myFilter',
            pure: false
        })
    ], MyFilterPipe);
    return MyFilterPipe;
}());
exports.MyFilterPipe = MyFilterPipe;
