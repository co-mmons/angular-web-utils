import * as tslib_1 from "tslib";
import { Pipe, Directive, TemplateRef, ViewContainerRef, Input } from "@angular/core";
import { ScreenSizeMinWidth } from "./screen-size";
import { CssMatchMediaPipe } from "./match-media";
function buildMediaQuery(comparison, input) {
    let size = input;
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
let CssMatchWidthGreaterPipe = class CssMatchWidthGreaterPipe extends CssMatchMediaPipe {
    prepareQuery(query) {
        return buildMediaQuery("gte", query);
    }
};
CssMatchWidthGreaterPipe = tslib_1.__decorate([
    Pipe({
        name: "cssMatchGreaterWidth",
        pure: false
    })
], CssMatchWidthGreaterPipe);
export { CssMatchWidthGreaterPipe };
let CssMatchLesserWidthPipe = class CssMatchLesserWidthPipe extends CssMatchMediaPipe {
    prepareQuery(query) {
        return buildMediaQuery("lte", query);
    }
};
CssMatchLesserWidthPipe = tslib_1.__decorate([
    Pipe({
        name: "cssMatchLesserWidth",
        pure: false
    })
], CssMatchLesserWidthPipe);
export { CssMatchLesserWidthPipe };
let CssIfMatchGreaterWidthDirective = class CssIfMatchGreaterWidthDirective {
    constructor(template, viewContainer) {
        this.template = template;
        this.viewContainer = viewContainer;
    }
    set cssIfMatchGreaterWidth(minWidth) {
        let matches = window.matchMedia(buildMediaQuery("gte", minWidth)).matches;
        if (matches) {
            this.viewContainer.createEmbeddedView(this.template);
        }
        else if (!matches) {
            this.viewContainer.clear();
        }
    }
};
tslib_1.__decorate([
    Input("cssIfMatchGreaterWidth"),
    tslib_1.__metadata("design:type", String),
    tslib_1.__metadata("design:paramtypes", [String])
], CssIfMatchGreaterWidthDirective.prototype, "cssIfMatchGreaterWidth", null);
CssIfMatchGreaterWidthDirective = tslib_1.__decorate([
    Directive({
        selector: "[cssIfMatchGreaterWidth]"
    }),
    tslib_1.__metadata("design:paramtypes", [TemplateRef, ViewContainerRef])
], CssIfMatchGreaterWidthDirective);
export { CssIfMatchGreaterWidthDirective };
let CssIfMatchLesserWidthDirective = class CssIfMatchLesserWidthDirective {
    constructor(template, viewContainer) {
        this.template = template;
        this.viewContainer = viewContainer;
    }
    set cssIfMatchLesserWidth(maxWidth) {
        let matches = window.matchMedia(buildMediaQuery("lte", maxWidth)).matches;
        if (matches) {
            this.viewContainer.createEmbeddedView(this.template);
        }
        else if (!matches) {
            this.viewContainer.clear();
        }
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String),
    tslib_1.__metadata("design:paramtypes", [String])
], CssIfMatchLesserWidthDirective.prototype, "cssIfMatchLesserWidth", null);
CssIfMatchLesserWidthDirective = tslib_1.__decorate([
    Directive({
        selector: "[cssIfMatchLesserWidth]"
    }),
    tslib_1.__metadata("design:paramtypes", [TemplateRef, ViewContainerRef])
], CssIfMatchLesserWidthDirective);
export { CssIfMatchLesserWidthDirective };
//# sourceMappingURL=match-width.js.map