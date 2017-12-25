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
var Demo07Component = (function () {
    function Demo07Component() {
        this.kw = '';
    }
    Demo07Component.prototype.ngOnInit = function () { };
    Demo07Component.prototype.handleClick = function () {
        console.log("btn is clicked");
    };
    //input
    Demo07Component.prototype.handleChangeBg = function (msg) {
        console.log(msg);
    };
    Demo07Component = __decorate([
        core_1.Component({
            selector: 'demo07',
            templateUrl: './demo07.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], Demo07Component);
    return Demo07Component;
}());
exports.Demo07Component = Demo07Component;
//# sourceMappingURL=demo07.component.js.map