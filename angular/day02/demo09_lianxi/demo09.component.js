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
var Demo09Component = (function () {
    function Demo09Component() {
        this.opacityValue = 0.1;
        //记录定时器是否在运行
        this.isTimerOn = false;
    }
    Demo09Component.prototype.ngOnInit = function () { };
    //点击按钮时 调用的方法，在该方法中
    //启动一个定时器 修改透明度的值
    Demo09Component.prototype.changeOpacity = function () {
        var _this = this;
        if (this.isTimerOn) {
            return;
        }
        setInterval(function () {
            //修改数据
            _this.opacityValue += 0.1;
            //临界值的判断
            if (_this.opacityValue > 1) {
                _this.opacityValue = 0;
            }
        }, 500);
        this.isTimerOn = true;
    };
    Demo09Component = __decorate([
        core_1.Component({
            selector: 'demo09',
            templateUrl: './demo09.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], Demo09Component);
    return Demo09Component;
}());
exports.Demo09Component = Demo09Component;
//# sourceMappingURL=demo09.component.js.map