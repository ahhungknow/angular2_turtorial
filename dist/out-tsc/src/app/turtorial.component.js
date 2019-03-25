import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
var TurtorialComponent = /** @class */ (function () {
    function TurtorialComponent() {
        this.hello = "Hello ahhungknow - Angular";
        this.showLineIf = false;
        this.color = "blue";
        this.colors = ["red", "green", "blue"];
    }
    TurtorialComponent = tslib_1.__decorate([
        Component({
            selector: 'first',
            template: "\n    <h2>{{hello}}</h2>\n    <h3 *ngIf=\"showLineIf\">This is ngIf directive line</h3>\n    <div [ngSwitch]=\"color\">\n        <p *ngSwitchCase=\"'red'\">This line color is red</p>\n        <p *ngSwitchCase=\"'blue'\">This line color is blue</p>\n        <p *ngSwitchCase=\"'green'\">This line color is green</p>\n        <p *ngSwitchDefault>Invalid color</p>\n    </div>\n    <ul>\n        <li *ngFor=\"let i of colors\">{{i}}</li>\n    </ul>"
        })
    ], TurtorialComponent);
    return TurtorialComponent;
}());
export { TurtorialComponent };
//# sourceMappingURL=turtorial.component.js.map