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
var TestMainComponent = (function () {
    function TestMainComponent() {
        this.isLogin = false;
        this.myList = ['张三', 28, 98, 128];
    }
    TestMainComponent.prototype.rcvResult = function (result) {
        console.log("main中收到的结果为：" + result);
        this.isLogin = result;
    };
    TestMainComponent.prototype.ngOnInit = function () { };
    TestMainComponent = __decorate([
        core_1.Component({
            selector: 'test-main',
            template: "\n        <test-header \n            (toFatherEvent)=\"rcvResult($event)\"\n            toSon=\"\u8FD9\u662F\u4E3B\u9875\"></test-header>\n        <hr/>\n        <ul *ngIf=\"isLogin\">\n            <li *ngFor=\"let tmp of myList\">{{tmp}}</li>\n        </ul>\n        \n    "
        }), 
        __metadata('design:paramtypes', [])
    ], TestMainComponent);
    return TestMainComponent;
}());
exports.TestMainComponent = TestMainComponent;
//# sourceMappingURL=main.component.js.map