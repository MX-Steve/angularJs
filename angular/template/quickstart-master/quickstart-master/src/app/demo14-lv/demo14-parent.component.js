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
var Demo14ParentComponent = (function () {
    function Demo14ParentComponent() {
    }
    //按钮按下获取子组件的值
    Demo14ParentComponent.prototype.handleClick = function (myObject) {
        //无法通过本地变量mySon去得到子组件实例的
        console.log(myObject);
        console.log(this.mySon);
    };
    Demo14ParentComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.ViewChild('mySon'), 
        __metadata('design:type', Object)
    ], Demo14ParentComponent.prototype, "mySon", void 0);
    Demo14ParentComponent = __decorate([
        core_1.Component({
            selector: 'demo14-parent',
            template: "\n        <h1>\u7236\u7EC4\u4EF6</h1>\n        <p>{{\"\u5B50\u7EC4\u4EF6\u4E2D\u7684age\u662F\uFF1A\"+mySon.age}}</p>\n        <button (click)=\"handleClick(mySon)\">clickMe</button>\n        <hr>\n        <demo14-son #mySon></demo14-son>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], Demo14ParentComponent);
    return Demo14ParentComponent;
}());
exports.Demo14ParentComponent = Demo14ParentComponent;
//# sourceMappingURL=demo14-parent.component.js.map