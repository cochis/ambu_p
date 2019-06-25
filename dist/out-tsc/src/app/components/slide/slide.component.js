import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { SharedService } from '../../services/shared';
var SlideComponent = /** @class */ (function () {
    function SlideComponent(_sharedService) {
        this._sharedService = _sharedService;
    }
    SlideComponent.prototype.ngOnInit = function () {
    };
    SlideComponent.prototype.ngDoCheck = function () {
    };
    SlideComponent = tslib_1.__decorate([
        Component({
            selector: 'app-slide',
            templateUrl: './slide.component.html'
        }),
        tslib_1.__metadata("design:paramtypes", [SharedService])
    ], SlideComponent);
    return SlideComponent;
}());
export { SlideComponent };
//# sourceMappingURL=slide.component.js.map