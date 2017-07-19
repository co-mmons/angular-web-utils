import { Pipe, Directive, TemplateRef, ViewContainerRef, Input } from "@angular/core";
var CssMatchMediaPipe = (function () {
    function CssMatchMediaPipe() {
    }
    CssMatchMediaPipe.prototype.transform = function (query) {
        if (query != this.query) {
            this.destroy();
            this.queryList = window.matchMedia(this.prepareQuery(query));
        }
        return this.queryList.matches;
    };
    CssMatchMediaPipe.prototype.prepareQuery = function (inputQuery) {
        return inputQuery;
    };
    CssMatchMediaPipe.prototype.destroy = function () {
        this.queryList = null;
    };
    CssMatchMediaPipe.prototype.ngOnDestroy = function () {
        this.destroy;
    };
    CssMatchMediaPipe.decorators = [
        { type: Pipe, args: [{
                    name: "cssMatchMedia",
                    pure: false
                },] },
    ];
    /** @nocollapse */
    CssMatchMediaPipe.ctorParameters = function () { return []; };
    return CssMatchMediaPipe;
}());
export { CssMatchMediaPipe };
var CssIfMatchMediaDirective = (function () {
    function CssIfMatchMediaDirective(template, viewContainer) {
        this.template = template;
        this.viewContainer = viewContainer;
    }
    Object.defineProperty(CssIfMatchMediaDirective.prototype, "cssIfMatchMedia", {
        set: function (query) {
            var matches = window.matchMedia(query).matches;
            if (matches) {
                this.viewContainer.createEmbeddedView(this.template);
            }
            else if (!matches) {
                this.viewContainer.clear();
            }
        },
        enumerable: true,
        configurable: true
    });
    CssIfMatchMediaDirective.decorators = [
        { type: Directive, args: [{
                    selector: "[cssIfMatchMedia]"
                },] },
    ];
    /** @nocollapse */
    CssIfMatchMediaDirective.ctorParameters = function () { return [
        { type: TemplateRef, },
        { type: ViewContainerRef, },
    ]; };
    CssIfMatchMediaDirective.propDecorators = {
        'cssIfMatchMedia': [{ type: Input },],
    };
    return CssIfMatchMediaDirective;
}());
export { CssIfMatchMediaDirective };
//# sourceMappingURL=match-media.js.map