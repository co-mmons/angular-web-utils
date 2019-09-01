import * as tslib_1 from "tslib";
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
var CssMatchWidthGreaterPipe = /** @class */ (function (_super) {
    tslib_1.__extends(CssMatchWidthGreaterPipe, _super);
    function CssMatchWidthGreaterPipe() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CssMatchWidthGreaterPipe.prototype.prepareQuery = function (query) {
        return buildMediaQuery("gte", query);
    };
    CssMatchWidthGreaterPipe = tslib_1.__decorate([
        Pipe({
            name: "cssMatchGreaterWidth",
            pure: false
        })
    ], CssMatchWidthGreaterPipe);
    return CssMatchWidthGreaterPipe;
}(CssMatchMediaPipe));
export { CssMatchWidthGreaterPipe };
var CssMatchLesserWidthPipe = /** @class */ (function (_super) {
    tslib_1.__extends(CssMatchLesserWidthPipe, _super);
    function CssMatchLesserWidthPipe() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CssMatchLesserWidthPipe.prototype.prepareQuery = function (query) {
        return buildMediaQuery("lte", query);
    };
    CssMatchLesserWidthPipe = tslib_1.__decorate([
        Pipe({
            name: "cssMatchLesserWidth",
            pure: false
        })
    ], CssMatchLesserWidthPipe);
    return CssMatchLesserWidthPipe;
}(CssMatchMediaPipe));
export { CssMatchLesserWidthPipe };
var CssIfMatchGreaterWidthDirective = /** @class */ (function () {
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
    return CssIfMatchGreaterWidthDirective;
}());
export { CssIfMatchGreaterWidthDirective };
var CssIfMatchLesserWidthDirective = /** @class */ (function () {
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
    return CssIfMatchLesserWidthDirective;
}());
export { CssIfMatchLesserWidthDirective };
//# sourceMappingURL=match-width.js.map