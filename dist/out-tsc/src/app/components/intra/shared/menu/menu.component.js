import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { SharedService } from '../../../../services/shared';
import { RolesService } from 'src/app/services/roles.service';
var MenuComponent = /** @class */ (function () {
    function MenuComponent(_sharedService, _rolesService) {
        this._sharedService = _sharedService;
        this._rolesService = _rolesService;
    }
    MenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.window = window.scroll(0, 0);
        this.empleado = this._sharedService.getLocal('empleado');
        this._rolesService.getRolByClvRol(this.empleado.rolEmpleado).subscribe(function (data) {
            _this.permisos = JSON.parse(data.permisos);
            _this.permisos = _this.permisos.permisos;
        }, function (error) {
            console.log(error);
        });
    };
    MenuComponent = tslib_1.__decorate([
        Component({
            selector: 'app-menu',
            templateUrl: './menu.component.html'
        }),
        tslib_1.__metadata("design:paramtypes", [SharedService,
            RolesService])
    ], MenuComponent);
    return MenuComponent;
}());
export { MenuComponent };
//# sourceMappingURL=menu.component.js.map