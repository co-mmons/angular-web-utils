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
var CssMatchWidthGreaterPipe = /** @class */ (function (_super) {
    __extends(CssMatchWidthGreaterPipe, _super);
    function CssMatchWidthGreaterPipe() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CssMatchWidthGreaterPipe.prototype.prepareQuery = function (query) {
        return buildMediaQuery("gte", query);
    };
    return CssMatchWidthGreaterPipe;
}(CssMatchMediaPipe));
export { CssMatchWidthGreaterPipe };
var CssMatchLesserWidthPipe = /** @class */ (function (_super) {
    __extends(CssMatchLesserWidthPipe, _super);
    function CssMatchLesserWidthPipe() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CssMatchLesserWidthPipe.prototype.prepareQuery = function (query) {
        return buildMediaQuery("lte", query);
    };
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
    return CssIfMatchLesserWidthDirective;
}());
export { CssIfMatchLesserWidthDirective };
//# sourceMappingURL=match-width.js.map