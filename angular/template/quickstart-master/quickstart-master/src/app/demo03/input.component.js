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
var MyInputComponent = (function () {
    function MyInputComponent() {
    }
    MyInputComponent = __decorate([
        core_1.Component({
            selector: "my-input",
            template: "\n        <div>\n            <h2>\u5F85\u505A\u4E8B\u9879\u5217\u8868</h2>\n            <input type=\"text\" placeholder=\"\u8BF7\u8F93\u5165\u4EE3\u505A\u4E8B\u9879\">\n            <button>\u6DFB\u52A0</button>\n        </div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], MyInputComponent);
    return MyInputComponent;
}());
exports.MyInputComponent = MyInputComponent;
//# sourceMappingURL=input.component.js.map