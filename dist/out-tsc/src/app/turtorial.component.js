import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
var FirstComponent = /** @class */ (function () {
    function FirstComponent() {
        this.hello = "Hello ahhungknow - You are using one way binding";
        //property binding
        this.image = "http://lorempixel.com/300/300";
        this.name = "ahhungknow";
    }
    FirstComponent = tslib_1.__decorate([
        Component({
            selector: 'first',
            template: "<h2>{{hello}}</h2>\n    <img [src]=\"image\"/>\n    <br>\n    <input type=\"text\" [value]=\"name\"/>",
            styles: ['h2 {color:red}']
        })
    ], FirstComponent);
    return FirstComponent;
}());
export { FirstComponent };
//# sourceMappingURL=turtorial.component.js.map