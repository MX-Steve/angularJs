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
var Demo19SonComponent = (function () {
    function Demo19SonComponent() {
        //定义一个myList数组
        this.myList = [];
    }
    Demo19SonComponent.prototype.ngOnInit = function () {
        console.log("子组件接收到的数据为：" + this.myCount);
        // setTimeout(()=>{},3000);
        for (var i = 0; i < this.myCount; i++) {
            this.myList.push(Math.floor(Math.random() * 100 + 1));
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], Demo19SonComponent.prototype, "myCount", void 0);
    Demo19SonComponent = __decorate([
        core_1.Component({
            selector: 'demo19-son',
            templateUrl: './demo19-son.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], Demo19SonComponent);
    return Demo19SonComponent;
}());
exports.Demo19SonComponent = Demo19SonComponent;
//# sourceMappingURL=demo19-son.component.js.map