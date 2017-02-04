import { NgModule } from "@angular/core";

import { CssMatchMedia } from "./match-media";

export * from "./match-media";

@NgModule({
    declarations: [CssMatchMedia],
    exports: [CssMatchMedia]
})
export class CssModule {
}