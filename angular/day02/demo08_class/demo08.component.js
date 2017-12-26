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
var core_1 = require('@angular/core');
var Demo08Component = (function () {
    function Demo08Component() {
        this.isUserLogin = true;
        this.myBgColor = '#0000ff';
    }
    Demo08Component.prototype.ngOnInit = function () { };
    //当input中的数据发生变化时 要调用的方法
    Demo08Component.prototype.handleChangBg = function (msg) {
        console.log('sth changed:' + msg);
        console.log(this.myBgColor);
    };
    Demo08Component = __decorate([
        core_1.Component({
            selector: 'demo08',
            templateUrl: './demo08.component.html',
            styleUrls: ['./test.css']
        }), 
        __metadata('design:paramtypes', [])
    ], Demo08Component);
    return Demo08Component;
}());
exports.Demo08Component = Demo08Component;
//# sourceMappingURL=demo08.component.js.map