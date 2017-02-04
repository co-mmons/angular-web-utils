import { PipeTransform } from "@angular/core";
export declare class CssMatchMedia implements PipeTransform {
    transform(query: string): boolean;
    private queryList;
    private query;
    private destroy();
    ngOnDestroy(): void;
}
