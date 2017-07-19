import {Pipe, PipeTransform, Directive, TemplateRef, ViewContainerRef, Input} from "@angular/core";
import {ScreenSizeMinWidth} from "./screen-size";
import {CssMatchMediaPipe} from "./match-media";

function buildMediaQuery(comparison: "lte" | "gte", input: string): string {

    let size: any = input;

    // when predefined size is given
    if (input.match(/^\D+$/)) {
        size = ScreenSizeMinWidth[input];

        if (size === undefined) {
            throw new Error("Cannot find predefined screen size for key " + input);
        }

        if (comparison == "lte") {
            size = size - 1;
        }
    }

    return `(${comparison == "gte" ? "min-width" : "max-width"}: ${size}px)`;
}

@Pipe({
    name: "cssMatchGreaterWidth",
    pure: false
})
export class CssMatchWidthGreaterPipe extends CssMatchMediaPipe {

    protected prepareQuery(query: string) {
        return buildMediaQuery("gte", query);
    }

}

@Pipe({
    name: "cssMatchLesserWidth",
    pure: false
})
export class CssMatchLesserWidthPipe extends CssMatchMediaPipe {

    protected prepareQuery(query: string) {
        return buildMediaQuery("lte", query);
    }

}

@Directive({
    selector: "[cssIfMatchGreaterWidth]"
})
export class CssIfMatchGreaterWidthDirective {

    constructor(private template: TemplateRef<any>, private viewContainer: ViewContainerRef) {
    }

    @Input("cssIfMatchGreaterWidth")
    set cssIfMatchGreaterWidth(minWidth: string) {

        let matches = window.matchMedia(buildMediaQuery("gte", minWidth)).matches;

        if (matches) {
            this.viewContainer.createEmbeddedView(this.template);
        } else if (!matches) {
            this.viewContainer.clear();
        }
    }
}

@Directive({
    selector: "[cssIfMatchLesserWidth]"
})
export class CssIfMatchLesserWidthDirective {

    constructor(private template: TemplateRef<any>, private viewContainer: ViewContainerRef) {
    }

    @Input()
    set cssIfMatchLesserWidth(maxWidth: string) {

        let matches = window.matchMedia(buildMediaQuery("lte", maxWidth)).matches;

        if (matches) {
            this.viewContainer.createEmbeddedView(this.template);
        } else if (!matches) {
            this.viewContainer.clear();
        }
    }
}