import {Pipe, PipeTransform, Directive, TemplateRef, ViewContainerRef, Input} from "@angular/core";

@Pipe({
    name: "cssMatchMedia",
    pure: false
})
export class CssMatchMediaPipe implements PipeTransform {

    transform(query: string): boolean {

        if (query != this.query) {
            this.destroy();
            this.queryList = window.matchMedia(this.prepareQuery(query));
        }

        return this.queryList.matches;
    }

    protected prepareQuery(inputQuery: string) {
        return inputQuery;
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

@Directive({
    selector: "[cssIfMatchMedia]"
})
export class CssIfMatchMediaDirective {

    constructor(private template: TemplateRef<any>, private viewContainer: ViewContainerRef) {
    }

    @Input()
    set cssIfMatchMedia(query: string) {

        let matches = window.matchMedia(query).matches;

        if (matches) {
            this.viewContainer.createEmbeddedView(this.template);
        } else if (!matches) {
            this.viewContainer.clear();
        }
    }
}
