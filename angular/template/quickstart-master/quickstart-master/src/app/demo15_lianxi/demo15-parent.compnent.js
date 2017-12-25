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
var Demo15ParentComponent = (function () {
    function Demo15ParentComponent() {
    }
    Demo15ParentComponent.prototype.start = function (obj) {
        obj.getStart();
        this.mySon.getStart();
    };
    Demo15ParentComponent.prototype.end = function (obj) {
        obj.getEnd();
        this.mySon.getEnd();
    };
    Demo15ParentComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.ViewChild('mySon'), 
        __metadata('design:type', Object)
    ], Demo15ParentComponent.prototype, "mySon", void 0);
    Demo15ParentComponent = __decorate([
        core_1.Component({
            selector: 'demo15-parent',
            template: "\n        <h1>\u7236\u7EC4\u4EF6</h1>\n        <hr/>\n        <button (click)=\"start(mySon)\">\u5F00\u59CB</button>\n        <button (click)=\"end(mySon)\">\u7ED3\u675F</button>\n        <demo15-son #mySon></demo15-son>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], Demo15ParentComponent);
    return Demo15ParentComponent;
}());
exports.Demo15ParentComponent = Demo15ParentComponent;
//# sourceMappingURL=demo15-parent.compnent.js.map