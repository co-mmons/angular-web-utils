import { NgModule } from "@angular/core";

import { CssModule } from "./css";

@NgModule({
    imports: [CssModule],
    exports: [CssModule]
})
export class WebUtilsModule {
}
