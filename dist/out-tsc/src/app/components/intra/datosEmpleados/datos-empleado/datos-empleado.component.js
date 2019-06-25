import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { EmpleadoService } from '../../../../services/empleado.service';
import { RolesService } from '../../catalogos/services/roles.service';
import { DatosEmpleadoService } from '../../../../services/datosEmpleadosService';
var DatosEmpleadoComponent = /** @class */ (function () {
    function DatosEmpleadoComponent(_empleadoService, _datosEmpleadoService, _rolService) {
        this._empleadoService = _empleadoService;
        this._datosEmpleadoService = _datosEmpleadoService;
        this._rolService = _rolService;
        this.index = -1;
        this.displayEditar = false;
        this.displayMostrar = false;
        this.displayEstado = false;
        this.dtUs = false;
        this.loading = 0;
        this.displayFamilia = false;
        this.displayLegal = false;
        this.displayDomicilio = false;
        this.displaySalud = false;
    }
    DatosEmpleadoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._datosEmpleadoService.getDatosEmpleados().subscribe(function (data) {
            _this.datosEmpleados = data;
            // this.hora = JSON.stringify(data.horario);
        }, function (err) {
            console.log(err);
        });
        this.cols = [
            { field: 'idDatosEmpleado', header: 'Id' },
            { field: 'clvEmpleado', header: 'Clave de empleado' },
            { field: 'nombreCompleto', header: 'Nombre' },
            { field: 'fechaIngreso', header: 'Fecha de ingreso' },
            { field: 'clinicaImss', header: 'Clinica IMSS' },
            { field: 'rfc', header: 'RFC' },
            { field: 'puesto', header: 'Puesto' },
            { field: 'sueldo', header: 'Sueldo' },
            { field: 'horario', header: 'Horario' },
            { field: 'curp', header: 'Curp' },
            { field: 'nss', header: 'NSS' },
            { field: 'telefonoCasa', header: 'Telefono Local' },
            { field: 'telefonoMovil', header: 'Telefono Movil' },
            { field: 'tipoSangre', header: 'Tipo de Sangre' },
            { field: 'alergias', header: 'Alergias' },
            { field: 'domicilio', header: 'Domicilio' },
            { field: 'estadoCivil', header: 'Estado Civil' },
            { field: 'hijos', header: 'Hijos' },
            { field: 'nombrePadre', header: 'Nombre de Padre' },
            { field: 'nombreMadre', header: 'Nombre de Madre' },
            { field: 'UltimaActualizacion', header: 'Ultima Actualizacion' },
            { field: 'activo', header: 'Activo' },
            { field: 'genero', header: 'Genero' },
            { field: 'fechaCreacion', header: 'Fecha de creación' },
        ];
    };
    DatosEmpleadoComponent.prototype.openNext = function () {
        this.index = (this.index === 5) ? 0 : this.index + 1;
    };
    DatosEmpleadoComponent.prototype.openPrev = function () {
        this.index = (this.index <= 0) ? 5 : this.index - 1;
    };
    DatosEmpleadoComponent.prototype.showSalud = function (empleado) {
        var _this = this;
        console.log(empleado);
        this._datosEmpleadoService.getEmpleadoByClv(empleado).subscribe(function (data) {
            console.log(data);
            _this.busqueda = data;
        });
        this.displaySalud = true;
    };
    DatosEmpleadoComponent.prototype.showLegal = function (empleado) {
        var _this = this;
        console.log(empleado);
        this._datosEmpleadoService.getEmpleadoByClv(empleado).subscribe(function (data) {
            console.log(data);
            _this.busqueda = data;
        });
        this.displayLegal = true;
    };
    DatosEmpleadoComponent.prototype.showDomicilio = function (empleado) {
        var _this = this;
        console.log(empleado);
        this._datosEmpleadoService.getEmpleadoByClv(empleado).subscribe(function (data) {
            console.log(data);
            _this.busqueda = data;
        });
        this.displayDomicilio = true;
    };
    DatosEmpleadoComponent.prototype.showFamilia = function (empleado) {
        var _this = this;
        console.log(empleado);
        this._datosEmpleadoService.getEmpleadoByClv(empleado).subscribe(function (data) {
            console.log(data);
            _this.busqueda = data;
        });
        this.displayFamilia = true;
    };
    DatosEmpleadoComponent = tslib_1.__decorate([
        Component({
            selector: 'app-datos-empleado',
            templateUrl: './datos-empleado.component.html'
        }),
        tslib_1.__metadata("design:paramtypes", [EmpleadoService,
            DatosEmpleadoService,
            RolesService])
    ], DatosEmpleadoComponent);
    return DatosEmpleadoComponent;
}());
export { DatosEmpleadoComponent };
//# sourceMappingURL=datos-empleado.component.js.map