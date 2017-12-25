"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var Demo11Component = (function () {
    function Demo11Component() {
        this.isAgree = false;
        this.userInput = "";
        this.inputHistoryList = []; //保存输入的所有记录
    }
    //将用户当前输入添加到当前数组
    Demo11Component.prototype.saveToHistory = function () {
        this.inputHistoryList.push(this.userInput);
    };
    Demo11Component.prototype.ngOnInit = function () { };
    Demo11Component = __decorate([
        core_1.Component({
            selector: "demo11",
            templateUrl: "./demo11.component.html"
        }), 
        __metadata('design:paramtypes', [])
    ], Demo11Component);
    return Demo11Component;
}());
exports.Demo11Component = Demo11Component;
//# sourceMappingURL=demo11.component.js.map