import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
var TurtorialComponent = /** @class */ (function () {
    function TurtorialComponent() {
        this.applyClass = false;
        this.hello = "Hello ahhungknow - Angular";
    }
    TurtorialComponent.prototype.onClick = function () {
        if (this.applyClass == false)
            this.applyClass = true;
        else
            this.applyClass = false;
    };
    TurtorialComponent = tslib_1.__decorate([
        Component({
            selector: 'first',
            template: "<h2 [class.redColor]=\"applyClass\">{{hello}}</h2>\n    <button (click)=\"onClick()\">Click me!!</button>",
            styles: ['.redColor{color:red}']
        })
    ], TurtorialComponent);
    return TurtorialComponent;
}());
export { TurtorialComponent };
//# sourceMappingURL=turtorial.component.js.map