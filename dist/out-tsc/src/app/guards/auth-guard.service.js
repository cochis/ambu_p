import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { EmpleadoService } from '../services/empleado.service';
var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(_empleadoService) {
        this._empleadoService = _empleadoService;
    }
    AuthGuardService.prototype.canActivate = function () {
        if (this._empleadoService.isAutenticated()) {
            return true;
        }
        else {
            return false;
        }
    };
    AuthGuardService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [EmpleadoService])
    ], AuthGuardService);
    return AuthGuardService;
}());
export { AuthGuardService };
//# sourceMappingURL=auth-guard.service.js.map