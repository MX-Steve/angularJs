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
var Demo06Component = (function () {
    function Demo06Component() {
        this.stuList = [
            {
                age: 20,
                sex: 'male',
                score: 81
            },
            {
                age: 22,
                sex: 'male',
                score: 90
            },
            {
                age: 21,
                sex: 'female',
                score: 70
            },
            {
                age: 24,
                sex: 'male',
                score: 60
            },
            {
                age: 27,
                sex: 'female',
                score: 100
            },
        ];
    }
    Demo06Component.prototype.ngOnInit = function () { };
    Demo06Component = __decorate([
        core_1.Component({
            selector: 'demo06',
            templateUrl: './demo06.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], Demo06Component);
    return Demo06Component;
}());
exports.Demo06Component = Demo06Component;
//# sourceMappingURL=demo06.component.js.map