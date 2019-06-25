import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { RolesService } from '../../services/roles.service';
import { SharedService } from '../../../../../services/shared';
var RolesComponent = /** @class */ (function () {
    function RolesComponent(_rolService, _sharedService) {
        this._rolService = _rolService;
        this._sharedService = _sharedService;
    }
    RolesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.window = window.scroll(0, 0);
        this.empleado = this._sharedService.getLocal('empleado');
        this._rolService.getRolByClvRol(this.empleado.rolEmpleado).subscribe(function (data) {
            _this.permisos = JSON.parse(data.permisos);
            _this.permisos = _this.permisos.permisos;
            // console.log(this.permisos);
            _this._rolService.getRoles().subscribe(function (response) {
                _this.roles = response;
                for (var i = 0; i < _this.roles.length; i++) {
                    _this.permisos[i] = JSON.stringify(_this.roles[i].permisos);
                }
            }, function (error) {
                console.log(error);
            });
        }, function (error) {
            console.log(error);
        });
        this.cols = [
            { field: 'idRol', header: 'Id' },
            { field: 'nombre', header: 'Nombre' },
            { field: 'clvRol', header: 'Clave' },
            { field: 'activo', header: 'Activo' },
            { field: 'permisos', header: 'Permisos' },
            { field: 'tipo', header: 'Tipo' },
            { field: 'ultimaActualizacion', header: 'Ultima Modificacion' }
        ];
    };
    RolesComponent = tslib_1.__decorate([
        Component({
            selector: 'app-roles',
            templateUrl: './roles.component.html'
        }),
        tslib_1.__metadata("design:paramtypes", [RolesService,
            SharedService])
    ], RolesComponent);
    return RolesComponent;
}());
export { RolesComponent };
//# sourceMappingURL=roles.component.js.map