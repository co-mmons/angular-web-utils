import { Pipe } from "@angular/core";
export var CssMatchMedia = (function () {
    function CssMatchMedia() {
    }
    CssMatchMedia.prototype.transform = function (query) {
        if (query != this.query) {
            this.destroy();
            this.queryList = window.matchMedia(query);
        }
        return this.queryList.matches;
    };
    CssMatchMedia.prototype.destroy = function () {
        this.queryList = null;
    };
    CssMatchMedia.prototype.ngOnDestroy = function () {
        this.destroy;
    };
    CssMatchMedia.decorators = [
        { type: Pipe, args: [{
                    name: "cssMatchMedia",
                    pure: false
                },] },
    ];
    /** @nocollapse */
    CssMatchMedia.ctorParameters = [];
    return CssMatchMedia;
}());
//# sourceMappingURL=match-media.js.map