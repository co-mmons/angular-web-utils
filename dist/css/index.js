import { NgModule } from "@angular/core";
import { CssMatchMedia } from "./match-media";
export * from "./match-media";
export var CssModule = (function () {
    function CssModule() {
    }
    CssModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [CssMatchMedia],
                    exports: [CssMatchMedia]
                },] },
    ];
    /** @nocollapse */
    CssModule.ctorParameters = [];
    return CssModule;
}());
//# sourceMappingURL=index.js.map