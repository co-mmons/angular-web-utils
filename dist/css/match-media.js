import * as tslib_1 from "tslib";
import { Pipe, Directive, TemplateRef, ViewContainerRef, Input } from "@angular/core";
let CssMatchMediaPipe = class CssMatchMediaPipe {
    transform(query) {
        if (query != this.query) {
            this.destroy();
            this.queryList = window.matchMedia(this.prepareQuery(query));
        }
        return this.queryList.matches;
    }
    prepareQuery(inputQuery) {
        return inputQuery;
    }
    destroy() {
        this.queryList = null;
    }
    ngOnDestroy() {
        this.destroy;
    }
};
CssMatchMediaPipe = tslib_1.__decorate([
    Pipe({
        name: "cssMatchMedia",
        pure: false
    })
], CssMatchMediaPipe);
export { CssMatchMediaPipe };
let CssIfMatchMediaDirective = class CssIfMatchMediaDirective {
    constructor(template, viewContainer) {
        this.template = template;
        this.viewContainer = viewContainer;
    }
    set cssIfMatchMedia(query) {
        let matches = window.matchMedia(query).matches;
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
], CssIfMatchMediaDirective.prototype, "cssIfMatchMedia", null);
CssIfMatchMediaDirective = tslib_1.__decorate([
    Directive({
        selector: "[cssIfMatchMedia]"
    }),
    tslib_1.__metadata("design:paramtypes", [TemplateRef, ViewContainerRef])
], CssIfMatchMediaDirective);
export { CssIfMatchMediaDirective };
//# sourceMappingURL=match-media.js.map