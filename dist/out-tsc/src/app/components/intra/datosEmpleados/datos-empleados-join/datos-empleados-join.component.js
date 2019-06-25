import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { DatosEmpleado } from '../../../../models/datosEmpleado';
import { SharedService } from '../../../../services/shared';
import { DatosEmpleadoService } from '../../../../services/datosEmpleadosService';
var DatosEmpleadosJoinComponent = /** @class */ (function () {
    function DatosEmpleadosJoinComponent(_sharedService, _datosEmpleadosService) {
        this._sharedService = _sharedService;
        this._datosEmpleadosService = _datosEmpleadosService;
        this.datosEmpleado = new DatosEmpleado(0, '', '', '', '', '', '', 0, [], '', '', '', '', '', '', '', '', [], '', '', '', '', false, '');
    }
    DatosEmpleadosJoinComponent.prototype.ngOnInit = function () {
    };
    DatosEmpleadosJoinComponent.prototype.onSubmit = function (form) {
    };
    DatosEmpleadosJoinComponent = tslib_1.__decorate([
        Component({
            selector: 'app-datos-empleados-join',
            templateUrl: './datos-empleados-join.component.html'
        }),
        tslib_1.__metadata("design:paramtypes", [SharedService,
            DatosEmpleadoService])
    ], DatosEmpleadosJoinComponent);
    return DatosEmpleadosJoinComponent;
}());
export { DatosEmpleadosJoinComponent };
//# sourceMappingURL=datos-empleados-join.component.js.map