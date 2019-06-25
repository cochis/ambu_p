import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { EstadoCivilService } from '../../services/estadoCivil.service';
var EstadoCivilComponent = /** @class */ (function () {
    function EstadoCivilComponent(_estadoCivilService) {
        this._estadoCivilService = _estadoCivilService;
        this.permisos = [];
    }
    EstadoCivilComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._estadoCivilService.getEstadosCiviles().subscribe(function (res) {
            _this.estadosCiviles = res;
            console.log(_this.estadosCiviles);
        }, function (error) {
            console.log(error);
        });
        this.cols = [
            { field: 'idEstadoCivil', header: 'Id' },
            { field: 'nombre', header: 'Nombre' },
            { field: 'clvEstadoCivil', header: 'Clave' },
            { field: 'activo', header: 'Activo' },
            { field: 'tipo', header: 'Tipo' },
            { field: 'ultimaActualizacion', header: 'Ultima Modificacion' }
        ];
    };
    EstadoCivilComponent = tslib_1.__decorate([
        Component({
            selector: 'app-estado-civil',
            templateUrl: './estado-civil.component.html'
        }),
        tslib_1.__metadata("design:paramtypes", [EstadoCivilService])
    ], EstadoCivilComponent);
    return EstadoCivilComponent;
}());
export { EstadoCivilComponent };
//# sourceMappingURL=estado-civil.component.js.map