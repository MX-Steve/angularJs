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
var forms_1 = require("@angular/forms");
var app_component_1 = require('./app.component');
var demo01_component_1 = require("./demo01/demo01.component");
var demo02_component_1 = require("./demo02/demo02.component");
var item_component_1 = require("./demo02/item.component");
var box_component_1 = require("./demo03/box.component");
var input_component_1 = require("./demo03/input.component");
var list_component_1 = require("./demo03/list.component");
var myItem_component_1 = require("./demo03/myItem.component");
var demo04_component_1 = require("./demo04_basic/demo04.component");
var demo05_component_1 = require("./demo05_directive/demo05.component");
var demo06_component_1 = require("./demo06_lianxi/demo06.component");
var demo07_component_1 = require("./demo07/demo07.component");
var demo09_component_1 = require("./demo09_lianxi/demo09.component");
var demo10_component_1 = require("./demo10_custom_directive/demo10.component");
var test_directive_1 = require("./demo10_custom_directive/test.directive");
var demo11_component_1 = require("./demo11_lianxi/demo11.component");
var demo12_father_component_1 = require("./demo12_props/demo12-father.component");
var demo12_son_component_1 = require("./demo12_props/demo12-son.component");
var main_component_1 = require("./demo13-lianxi/main.component");
var header_component_1 = require("./demo13-lianxi/header.component");
var demo14_parent_component_1 = require("./demo14-lv/demo14-parent.component");
var demo14_son_component_1 = require("./demo14-lv/demo14-son.component");
var demo15_parent_compnent_1 = require("./demo15_lianxi/demo15-parent.compnent");
var demo15_son_component_1 = require("./demo15_lianxi/demo15-son.component");
var demo16_component_1 = require("./demo16-pipe/demo16.component");
var currency_pipe_1 = require("./demo16-pipe/currency.pipe");
var demo17_component_1 = require("./demo17_lianxi/demo17.component");
var sex_change_pipe_1 = require("./demo17_lianxi/sex-change.pipe");
var demo18_component_1 = require("./demo18_custom_directive/demo18.component");
var hello_directive_1 = require("./demo18_custom_directive/hello.directive");
var demo19_parent_component_1 = require("./demo19_lianxi/demo19-parent.component");
var demo19_son_component_1 = require("./demo19_lianxi/demo19-son.component");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule],
            declarations: [
                demo19_parent_component_1.Demo19ParentComponent, demo19_son_component_1.Demo19SonComponent,
                demo18_component_1.Demo18Component, hello_directive_1.HelloDirective,
                demo17_component_1.Demo17Component, sex_change_pipe_1.SexChangePipe,
                demo16_component_1.Demo16Component, currency_pipe_1.MyCurrencyPipe,
                demo15_parent_compnent_1.Demo15ParentComponent, demo15_son_component_1.Demo15SonComponent,
                demo14_parent_component_1.Demo14ParentComponent, demo14_son_component_1.Demo14SonComponent,
                demo12_father_component_1.Demo12FatherComponent, demo12_son_component_1.Demo12SonComponent, main_component_1.TestMainComponent, header_component_1.TestHeaderComponent,
                demo10_component_1.Demo10Component, test_directive_1.TestDirective, demo11_component_1.Demo11Component,
                demo04_component_1.Demo04Component, demo05_component_1.Demo05Component, demo06_component_1.Demo06Component, demo07_component_1.Demo07Component, demo09_component_1.Demo09Component,
                app_component_1.AppComponent, demo01_component_1.Demo01Component, demo02_component_1.Demo02Component, item_component_1.ItemComponent,
                box_component_1.MyBoxComponent, input_component_1.MyInputComponent, list_component_1.MyListComponent, myItem_component_1.MyItemComponent
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map