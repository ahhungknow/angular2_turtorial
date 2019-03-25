import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
var FirstComponent = /** @class */ (function () {
    function FirstComponent() {
        this.hello = "Hello ahhungknow - Angular";
        this.applyClass = true;
    }
    FirstComponent = tslib_1.__decorate([
        Component({
            selector: 'first',
            template: "<h2 [class.redColor]=\"applyClass\">{{hello}}</h2>\n              <h1 [class.greenColor]=\"applyClass\">{{hello}}</h1>",
            styles: [".redColor{\n        color:red;\n    } \n              .greenColor{\n                  color:green;\n              }"
            ]
        })
    ], FirstComponent);
    return FirstComponent;
}());
export { FirstComponent };
//# sourceMappingURL=turtorial.component.js.map