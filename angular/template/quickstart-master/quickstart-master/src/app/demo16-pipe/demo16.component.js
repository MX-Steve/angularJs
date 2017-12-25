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
var Demo16Component = (function () {
    function Demo16Component() {
        this.actorName = "Jhone";
        this.nowDate = new Date();
        this.price = 123.45;
        this.scale = 0.22346;
        this.tips = "angular is a great framework!";
    }
    Demo16Component.prototype.ngOnInit = function () { };
    Demo16Component = __decorate([
        core_1.Component({
            selector: 'demo16',
            templateUrl: './demo16-component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], Demo16Component);
    return Demo16Component;
}());
exports.Demo16Component = Demo16Component;
//# sourceMappingURL=demo16.component.js.map