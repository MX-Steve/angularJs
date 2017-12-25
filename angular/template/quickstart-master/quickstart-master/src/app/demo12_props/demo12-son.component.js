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
var Demo12SonComponent = (function () {
    function Demo12SonComponent() {
        this.sonName = "";
        //通过input装饰器，来接收指定属性的值
        this.age = 0;
        //通过output装饰器，定义一个事件触发器
        this.toFatherEvent = new core_1.EventEmitter();
        this.myInput = "";
    }
    //调用方法，将用户输入的值发送给父组件
    Demo12SonComponent.prototype.sendMsg = function () {
        this.toFatherEvent.emit(this.myInput);
    };
    Demo12SonComponent.prototype.ngOnInit = function () { };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], Demo12SonComponent.prototype, "sonName", void 0);
    __decorate([
        core_1.Input('sonAge'), 
        __metadata('design:type', Object)
    ], Demo12SonComponent.prototype, "age", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], Demo12SonComponent.prototype, "toFatherEvent", void 0);
    Demo12SonComponent = __decorate([
        core_1.Component({
            selector: 'demo12-son',
            templateUrl: './demo12-son.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], Demo12SonComponent);
    return Demo12SonComponent;
}());
exports.Demo12SonComponent = Demo12SonComponent;
//# sourceMappingURL=demo12-son.component.js.map