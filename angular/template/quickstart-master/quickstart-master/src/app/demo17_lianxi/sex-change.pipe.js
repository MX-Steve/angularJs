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
var SexChangePipe = (function () {
    function SexChangePipe() {
    }
    SexChangePipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (value == 1) {
            if (args[0] == true) {
                return "男";
            }
            else {
                return "boy";
            }
        }
        else {
            if (args[0] == true) {
                return "女";
            }
            else {
                return "girl";
            }
        }
    };
    SexChangePipe = __decorate([
        core_1.Pipe({
            name: 'sexChange'
        }), 
        __metadata('design:paramtypes', [])
    ], SexChangePipe);
    return SexChangePipe;
}());
exports.SexChangePipe = SexChangePipe;
//# sourceMappingURL=sex-change.pipe.js.map