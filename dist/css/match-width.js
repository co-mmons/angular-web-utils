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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
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
    CssMatchWidthGreaterPipe = __decorate([
        Pipe({
            name: "cssMatchGreaterWidth",
            pure: false
        })
    ], CssMatchWidthGreaterPipe);
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
    CssMatchLesserWidthPipe = __decorate([
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
    __decorate([
        Input("cssIfMatchGreaterWidth"),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], CssIfMatchGreaterWidthDirective.prototype, "cssIfMatchGreaterWidth", null);
    CssIfMatchGreaterWidthDirective = __decorate([
        Directive({
            selector: "[cssIfMatchGreaterWidth]"
        }),
        __metadata("design:paramtypes", [TemplateRef, ViewContainerRef])
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
    __decorate([
        Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], CssIfMatchLesserWidthDirective.prototype, "cssIfMatchLesserWidth", null);
    CssIfMatchLesserWidthDirective = __decorate([
        Directive({
            selector: "[cssIfMatchLesserWidth]"
        }),
        __metadata("design:paramtypes", [TemplateRef, ViewContainerRef])
    ], CssIfMatchLesserWidthDirective);
    return CssIfMatchLesserWidthDirective;
}());
export { CssIfMatchLesserWidthDirective };
//# sourceMappingURL=match-width.js.map