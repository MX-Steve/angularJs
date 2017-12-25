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
// import {  }
var Demo02Component = (function () {
    function Demo02Component() {
    }
    Demo02Component = __decorate([
        core_1.Component({
            selector: "demo02",
            template: "<div>\n        <ul>\n            <my-item></my-item>\n            <my-item></my-item>\n            <my-item></my-item>\n        </ul>\n    </div>"
        }), 
        __metadata('design:paramtypes', [])
    ], Demo02Component);
    return Demo02Component;
}());
exports.Demo02Component = Demo02Component;
//# sourceMappingURL=demo02.component.js.map