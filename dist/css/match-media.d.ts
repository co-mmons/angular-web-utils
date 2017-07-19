import { PipeTransform, TemplateRef, ViewContainerRef } from "@angular/core";
export declare class CssMatchMediaPipe implements PipeTransform {
    transform(query: string): boolean;
    protected prepareQuery(inputQuery: string): string;
    private queryList;
    private query;
    private destroy();
    ngOnDestroy(): void;
}
export declare class CssIfMatchMediaDirective {
    private template;
    private viewContainer;
    constructor(template: TemplateRef<any>, viewContainer: ViewContainerRef);
    cssIfMatchMedia: string;
}
