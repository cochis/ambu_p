import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { EmpleadoService } from '../services/empleado.service';
var RolesGuardService = /** @class */ (function () {
    function RolesGuardService(_empleadoService) {
        this._empleadoService = _empleadoService;
    }
    RolesGuardService.prototype.canActivate = function () {
        if (this._empleadoService.isAutenticated()) {
            return true;
        }
        else {
            return false;
        }
    };
    RolesGuardService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [EmpleadoService])
    ], RolesGuardService);
    return RolesGuardService;
}());
export { RolesGuardService };
//# sourceMappingURL=roles-guard.service.js.map