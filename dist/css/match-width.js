var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { Pipe, Directive, TemplateRef, ViewContainerRef, Input } from "@angular/core";
import { ScreenSizeMinWidth } from "./screen-size";
import { CssMatchMediaPipe } from "./match-media";
function buildMediaQuery(comparison, input) {
    var size = input;
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
    return "(" + (comparison == "gte" ? "min-width" : "max-width") + ": " + size + "px)";
}
var CssMatchWidthGreaterPipe = (function (_super) {
    __extends(CssMatchWidthGreaterPipe, _super);
    function CssMatchWidthGreaterPipe() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CssMatchWidthGreaterPipe.prototype.prepareQuery = function (query) {
        return buildMediaQuery("gte", query);
    };
    CssMatchWidthGreaterPipe.decorators = [
        { type: Pipe, args: [{
                    name: "cssMatchGreaterWidth",
                    pure: false
                },] },
    ];
    /** @nocollapse */
    CssMatchWidthGreaterPipe.ctorParameters = function () { return []; };
    return CssMatchWidthGreaterPipe;
}(CssMatchMediaPipe));
export { CssMatchWidthGreaterPipe };
var CssMatchLesserWidthPipe = (function (_super) {
    __extends(CssMatchLesserWidthPipe, _super);
    function CssMatchLesserWidthPipe() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CssMatchLesserWidthPipe.prototype.prepareQuery = function (query) {
        return buildMediaQuery("lte", query);
    };
    CssMatchLesserWidthPipe.decorators = [
        { type: Pipe, args: [{
                    name: "cssMatchLesserWidth",
                    pure: false
                },] },
    ];
    /** @nocollapse */
    CssMatchLesserWidthPipe.ctorParameters = function () { return []; };
    return CssMatchLesserWidthPipe;
}(CssMatchMediaPipe));
export { CssMatchLesserWidthPipe };
var CssIfMatchGreaterWidthDirective = (function () {
    function CssIfMatchGreaterWidthDirective(template, viewContainer) {
        this.template = template;
        this.viewContainer = viewContainer;
    }
    Object.defineProperty(CssIfMatchGreaterWidthDirective.prototype, "cssIfMatchGreaterWidth", {
        set: function (minWidth) {
            var matches = window.matchMedia(buildMediaQuery("gte", minWidth)).matches;
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
    CssIfMatchGreaterWidthDirective.decorators = [
        { type: Directive, args: [{
                    selector: "[cssIfMatchGreaterWidth]"
                },] },
    ];
    /** @nocollapse */
    CssIfMatchGreaterWidthDirective.ctorParameters = function () { return [
        { type: TemplateRef, },
        { type: ViewContainerRef, },
    ]; };
    CssIfMatchGreaterWidthDirective.propDecorators = {
        'cssIfMatchGreaterWidth': [{ type: Input, args: ["cssIfMatchGreaterWidth",] },],
    };
    return CssIfMatchGreaterWidthDirective;
}());
export { CssIfMatchGreaterWidthDirective };
var CssIfMatchLesserWidthDirective = (function () {
    function CssIfMatchLesserWidthDirective(template, viewContainer) {
        this.template = template;
        this.viewContainer = viewContainer;
    }
    Object.defineProperty(CssIfMatchLesserWidthDirective.prototype, "cssIfMatchLesserWidth", {
        set: function (maxWidth) {
            var matches = window.matchMedia(buildMediaQuery("lte", maxWidth)).matches;
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
    CssIfMatchLesserWidthDirective.decorators = [
        { type: Directive, args: [{
                    selector: "[cssIfMatchLesserWidth]"
                },] },
    ];
    /** @nocollapse */
    CssIfMatchLesserWidthDirective.ctorParameters = function () { return [
        { type: TemplateRef, },
        { type: ViewContainerRef, },
    ]; };
    CssIfMatchLesserWidthDirective.propDecorators = {
        'cssIfMatchLesserWidth': [{ type: Input },],
    };
    return CssIfMatchLesserWidthDirective;
}());
export { CssIfMatchLesserWidthDirective };
//# sourceMappingURL=match-width.js.map