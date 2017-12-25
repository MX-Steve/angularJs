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
var HelloDirective = (function () {
    function HelloDirective(myER) {
        this.myER = myER;
        console.log("in directive !");
    }
    HelloDirective.prototype.ngOnInit = function () {
        console.log(this.myER.nativeElement);
        console.log(this.hello);
        //把调用指令时，传递来的参数，设置为当前元素的背景颜色
        this.myER.nativeElement.style.background = this.hello;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], HelloDirective.prototype, "hello", void 0);
    HelloDirective = __decorate([
        core_1.Directive({ selector: '[hello]' }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], HelloDirective);
    return HelloDirective;
}());
exports.HelloDirective = HelloDirective;
//# sourceMappingURL=hello.directive.js.map