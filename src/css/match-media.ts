import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "cssMatchMedia",
    pure: false
})
export class CssMatchMedia implements PipeTransform {

    transform(query: string): boolean {

        if (query != this.query) {
            this.destroy();
            this.queryList = window.matchMedia(query);
        }
        
        return this.queryList.matches;
    }

    private queryList: MediaQueryList;

    private query: string;

    private destroy() {
        this.queryList = null;
    }

    ngOnDestroy() {
        this.destroy;
    }

}
