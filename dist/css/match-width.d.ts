import { TemplateRef, ViewContainerRef } from "@angular/core";
import { CssMatchMediaPipe } from "./match-media";
export declare class CssMatchWidthGreaterPipe extends CssMatchMediaPipe {
    protected prepareQuery(query: string): string;
}
export declare class CssMatchLesserWidthPipe extends CssMatchMediaPipe {
    protected prepareQuery(query: string): string;
}
export declare class CssIfMatchGreaterWidthDirective {
    private template;
    private viewContainer;
    constructor(template: TemplateRef<any>, viewContainer: ViewContainerRef);
    cssIfMatchGreaterWidth: string;
}
export declare class CssIfMatchLesserWidthDirective {
    private template;
    private viewContainer;
    constructor(template: TemplateRef<any>, viewContainer: ViewContainerRef);
    cssIfMatchLesserWidth: string;
}
