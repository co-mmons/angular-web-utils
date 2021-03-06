import * as tslib_1 from "tslib";
import { NgModule } from "@angular/core";
import { CssMatchMediaPipe, CssIfMatchMediaDirective } from "./match-media";
import { CssMatchWidthGreaterPipe, CssMatchLesserWidthPipe, CssIfMatchGreaterWidthDirective, CssIfMatchLesserWidthDirective } from "./match-width";
export * from "./match-media";
export * from "./match-width";
let CssModule = class CssModule {
};
CssModule = tslib_1.__decorate([
    NgModule({
        declarations: [CssMatchMediaPipe, CssIfMatchMediaDirective, CssMatchWidthGreaterPipe, CssMatchLesserWidthPipe, CssIfMatchGreaterWidthDirective, CssIfMatchLesserWidthDirective],
        exports: [CssMatchMediaPipe, CssIfMatchMediaDirective, CssMatchWidthGreaterPipe, CssMatchLesserWidthPipe, CssIfMatchGreaterWidthDirective, CssIfMatchLesserWidthDirective]
    })
], CssModule);
export { CssModule };
//# sourceMappingURL=index.js.map