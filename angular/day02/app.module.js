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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var app_component_1 = require('./app.component');
var demo01_component_1 = require('./demo01/demo01.component');
var demo02_component_1 = require('./demo02/demo02.component');
var item_component_1 = require('./demo02/item.component');
var box_component_1 = require('./demo03/box.component');
var input_component_1 = require('./demo03/input.component');
var list_component_1 = require('./demo03/list.component');
var myItem_component_1 = require('./demo03/myItem.component');
var demo04_component_1 = require('./demo04_basic/demo04.component');
var demo05_component_1 = require('./demo05_directive/demo05.component');
var demo06_component_1 = require('./demo06_lianxi/demo06.component');
var demo07_component_1 = require('./demo07_bind/demo07.component');
var demo08_component_1 = require('./demo08_class/demo08.component');
var demo09_component_1 = require('./demo09_lianxi/demo09.component');
var demo10_component_1 = require('./demo10_custom_directive/demo10.component');
var test_directive_1 = require('./demo10_custom_directive/test.directive');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule],
            declarations: [
                test_directive_1.TestDirective,
                demo10_component_1.Demo10Component,
                demo09_component_1.Demo09Component,
                demo08_component_1.Demo08Component,
                demo07_component_1.Demo07Component,
                demo06_component_1.Demo06Component,
                demo05_component_1.Demo05Component,
                demo04_component_1.Demo04Component,
                myItem_component_1.MyItemComponent,
                list_component_1.ListComponent,
                input_component_1.InputComponent,
                box_component_1.BoxComponent,
                app_component_1.AppComponent,
                demo01_component_1.Demo01Component,
                demo02_component_1.Demo02Component,
                item_component_1.ItemComponent],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map