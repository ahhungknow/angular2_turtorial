import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
var TurtorialComponent = /** @class */ (function () {
    function TurtorialComponent() {
        this.hello = "Hello ahhungknow - Angular";
    }
    TurtorialComponent = tslib_1.__decorate([
        Component({
            selector: 'first',
            template: "\n    <h2>{{hello}}</h2>\n    <input type=\"text\" [(ngModel)] = \"fname\" />\n    <input type=\"text\" [(ngModel)] = \"lname\" />\n    <br>\n    Full name: {{fname}} {{lname}}"
        })
    ], TurtorialComponent);
    return TurtorialComponent;
}());
export { TurtorialComponent };
//# sourceMappingURL=turtorial.component.js.map