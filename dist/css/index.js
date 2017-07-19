import { NgModule } from "@angular/core";
import { CssMatchMediaPipe, CssIfMatchMediaDirective } from "./match-media";
import { CssMatchWidthGreaterPipe, CssMatchLesserWidthPipe, CssIfMatchGreaterWidthDirective, CssIfMatchLesserWidthDirective } from "./match-width";
export * from "./match-media";
export * from "./match-width";
var CssModule = (function () {
    function CssModule() {
    }
    CssModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [CssMatchMediaPipe, CssIfMatchMediaDirective, CssMatchWidthGreaterPipe, CssMatchLesserWidthPipe, CssIfMatchGreaterWidthDirective, CssIfMatchLesserWidthDirective],
                    exports: [CssMatchMediaPipe, CssIfMatchMediaDirective, CssMatchWidthGreaterPipe, CssMatchLesserWidthPipe, CssIfMatchGreaterWidthDirective, CssIfMatchLesserWidthDirective]
                },] },
    ];
    /** @nocollapse */
    CssModule.ctorParameters = function () { return []; };
    return CssModule;
}());
export { CssModule };
//# sourceMappingURL=index.js.map