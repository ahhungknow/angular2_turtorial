import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
var TurtorialComponent = /** @class */ (function () {
    function TurtorialComponent() {
        this.hello = "Hello ahhungknow - Angular";
        this.cone = true;
        this.ctwo = true;
        this.style = "italic";
        this.size = "30px";
    }
    TurtorialComponent.prototype.toggle = function () {
        this.cone = !this.cone;
        this.ctwo = !this.ctwo;
    };
    TurtorialComponent = tslib_1.__decorate([
        Component({
            selector: 'first',
            template: "\n    <h2>{{hello}}</h2>\n    <p [ngClass]=\"{one:cone,two:ctwo}\">This is ngClass apply style</p>\n    <button (click)=\"toggle()\">Change style</button>\n    <p [ngStyle]=\"{'font-style':style,'font-size':size}\">This is paragraph will be apply  to ngStyle</p>\n    ",
            styles: ["\n    .one{color:red;}\n    .two{background-color:black;}\n    "]
        })
    ], TurtorialComponent);
    return TurtorialComponent;
}());
export { TurtorialComponent };
//# sourceMappingURL=turtorial.component.js.map