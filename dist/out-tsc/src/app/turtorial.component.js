import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
var TurtorialComponent = /** @class */ (function () {
    function TurtorialComponent() {
    }
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], TurtorialComponent.prototype, "name", void 0);
    TurtorialComponent = tslib_1.__decorate([
        Component({
            selector: 'first',
            template: "\n    <h2>{{hello}}</h2>\n    <p>Child component {{name}}</p>"
        })
    ], TurtorialComponent);
    return TurtorialComponent;
}());
export { TurtorialComponent };
//# sourceMappingURL=turtorial.component.js.map