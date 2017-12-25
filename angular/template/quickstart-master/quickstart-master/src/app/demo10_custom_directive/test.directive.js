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
//OnInit:生命周期
var TestDirective = (function () {
    function TestDirective(myER) {
        this.myER = myER;
        console.log("custom directive is called");
        console.log(this.myER);
    }
    TestDirective.prototype.ngOnInit = function () {
        console.log("in lifecycle hook init");
        this.myER.nativeElement.innerHTML = "hello custom directive";
    };
    TestDirective = __decorate([
        core_1.Directive({ selector: '[test]' }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], TestDirective);
    return TestDirective;
}());
exports.TestDirective = TestDirective;
//# sourceMappingURL=test.directive.js.map