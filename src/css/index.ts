import {NgModule} from "@angular/core";

import {CssMatchMediaPipe, CssIfMatchMediaDirective} from "./match-media";
import {CssMatchWidthGreaterPipe, CssMatchLesserWidthPipe, CssIfMatchGreaterWidthDirective, CssIfMatchLesserWidthDirective} from "./match-width";

export * from "./match-media";
export * from "./match-width";

@NgModule({
    declarations: [CssMatchMediaPipe, CssIfMatchMediaDirective, CssMatchWidthGreaterPipe, CssMatchLesserWidthPipe, CssIfMatchGreaterWidthDirective, CssIfMatchLesserWidthDirective],
    exports: [CssMatchMediaPipe, CssIfMatchMediaDirective, CssMatchWidthGreaterPipe, CssMatchLesserWidthPipe, CssIfMatchGreaterWidthDirective, CssIfMatchLesserWidthDirective]
})
export class CssModule {
}