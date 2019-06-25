import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { DatosEmpleado } from '../../../../models/datosEmpleado';
import { DatosEmpleadoService } from '../../../../services/datosEmpleadosService';
import { Hijo } from '../../../../models/hijo';
import { EmpleadoService } from '../../../../services/empleado.service';
import { Router, ActivatedRoute } from '@angular/router';
import { RolesService } from '../../catalogos/services/roles.service';
var DetailEmpleadoComponent = /** @class */ (function () {
    function DetailEmpleadoComponent(_empleadoService, _rolService, _router, _route, _datosEmpleadoService) {
        this._empleadoService = _empleadoService;
        this._rolService = _rolService;
        this._router = _router;
        this._route = _route;
        this._datosEmpleadoService = _datosEmpleadoService;
        this.activateHijos = false;
        this.display = false;
        this.datosEmpleado = new DatosEmpleado(0, '', '', '', '', '', '', 0, [], '', '', '', '', '', '', '', '', [], '', '', '', '', false, '');
        this.hijo = new Hijo('', '', '', '', '');
    }
    DetailEmpleadoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.hijos = '';
        this._route.params.subscribe(function (params) {
            _this.clvEmpleado = params.clvEmpleado;
            _this.getEmpleadoByClv(_this.clvEmpleado);
            _this.horario = [
                {
                    "dia": "lunes",
                    "entrada": "00:00",
                    "salida": "23:59"
                },
                {
                    "dia": "martes",
                    "entrada": "00:00",
                    "salida": "23:59"
                },
                {
                    "dia": "miercoles",
                    "entrada": "00:00",
                    "salida": "23:59"
                },
                {
                    "dia": "jueves",
                    "entrada": "00:00",
                    "salida": "23:59"
                },
                {
                    "dia": "viernes",
                    "entrada": "00:00",
                    "salida": "23:59"
                },
                {
                    "dia": "sabado",
                    "entrada": "00:00",
                    "salida": "23:59"
                },
                {
                    "dia": "domingo",
                    "entrada": "00:00",
                    "salida": "23:59"
                }
            ];
        });
    };
    DetailEmpleadoComponent.prototype.ngDoCheck = function () {
        if (!this.hijo.fechaNacimiento) {
            this.hijo.edad = '0';
        }
        else {
            this.hijo.edad = this.calcularEdad(this.hijo.fechaNacimiento);
        }
        // console.log(this.nuevoHijo);
        // if (this.hijo.fechaNacimiento != "") {
        //   this.hijo.edad = this.calcularEdad(String(this.hijo.fechaNacimiento));
        // }
        // if (this.hijos = undefined) {
        //  this.hijos =  JSON.stringify(this.nuevoHijo);
        // // console.log(this.hijos);
        // } else {
        //   this.hijos = this.hijos + ',' + JSON.stringify(this.nuevoHijo);
        //   // console.log(this.hijos);
        // }
        // if (this.hijo.fechaNacimiento) {
        //   this.hijo.edad = this.calcularEdad(this.hijo.fechaNacimiento);
        // }
    };
    DetailEmpleadoComponent.prototype.getEmpleadoByClv = function (clv) {
        var _this = this;
        this._empleadoService.getEmpleadoByClv(clv).subscribe(function (response) {
            _this.empleado = response;
            // this.nombreCompleto = 
            _this.datosEmpleado.nombreCompleto = _this.empleado.nombre + ' ' + _this.empleado.apellidoPaterno + ' ' + _this.empleado.apellidoMaterno;
            _this.datosEmpleado.fechaIngreso = _this.empleado.fechaCreacion;
            _this.datosEmpleado.clvEmpleado = _this.empleado.clvEmpleado;
        }, function (error) {
            console.log(error);
        });
    };
    DetailEmpleadoComponent.prototype.agregarDatos = function (form) {
        var _this = this;
        this.hijos = '[' + this.hijos + ']';
        this.datosEmpleado = form.value;
        this.datosEmpleado.hijos = JSON.parse(this.hijos);
        this.datosEmpleado.horario = this.horario;
        // console.log(this.datosEmpleado);
        this._datosEmpleadoService.create(form.value, this.datosEmpleado.clvEmpleado).subscribe(function (res) {
            console.log(res);
            _this._router.navigate(['/intra/empleados']);
        }, function (error) {
            console.log(error);
        });
    };
    DetailEmpleadoComponent.prototype.integrarHijo = function (hijo) {
        console.log(hijo);
        console.log(this.muestraHijos);
        console.log(this.muestraHijos);
        if (!this.muestraHijos) {
            this.muestraHijos = JSON.stringify(this.muestraHijos);
            this.muestraHijos = JSON.stringify(hijo);
            //  this.muestraHijos.push(hijo);
            // console.log(JSON.parse(this.muestraHijos));
        }
        else {
            this.muestraHijos = JSON.stringify(this.muestraHijos);
            console.log(this.muestraHijos);
            this.muestraHijos = this.muestraHijos.replace('[', '');
            this.muestraHijos = this.muestraHijos.replace(']', '');
            console.log(this.muestraHijos);
            this.muestraHijos = this.muestraHijos + ',' + hijo;
            this.muestraHijos = JSON.parse('[' + this.muestraHijos + ']');
            console.log(this.muestraHijos);
        }
        this.muestraHijos = JSON.parse('[' + this.muestraHijos + ']');
        console.log(this.muestraHijos);
    };
    DetailEmpleadoComponent.prototype.agregarHijo = function (form) {
        // this.nuevoHijo = null;
        this.hijo = form.value;
        this.nuevoHijo = this.hijo;
        // console.log(this.nuevoHijo);
        if (this.hijos === '') {
            this.hijos = JSON.stringify(this.nuevoHijo);
        }
        else {
            this.hijos = this.hijos + ',' + JSON.stringify(this.nuevoHijo);
        }
        this.integrarHijo(this.hijos);
        // this.muestraHijos = JSON.parse(this.hijos);
        // console.log(this.hijos);
        this.hijo.nombre = '';
        this.hijo.fechaNacimiento = '';
        this.hijo.edad = '';
        this.hijo.genero = '';
        this.hijo.clvEmpleado = this.datosEmpleado.clvEmpleado;
        this.display = false;
        this.activateHijos = true;
    };
    DetailEmpleadoComponent.prototype.showDialog = function () {
        this.display = true;
    };
    DetailEmpleadoComponent.prototype.calcularEdad = function (fecha) {
        var hoy = new Date();
        var cumpleanos = new Date(fecha);
        var edad = hoy.getFullYear() - cumpleanos.getFullYear();
        var m = hoy.getMonth() - cumpleanos.getMonth();
        if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
            edad--;
        }
        return String(edad);
    };
    DetailEmpleadoComponent = tslib_1.__decorate([
        Component({
            selector: 'app-detail-empleado',
            templateUrl: './detail-empleado.component.html'
        }),
        tslib_1.__metadata("design:paramtypes", [EmpleadoService,
            RolesService,
            Router,
            ActivatedRoute,
            DatosEmpleadoService])
    ], DetailEmpleadoComponent);
    return DetailEmpleadoComponent;
}());
export { DetailEmpleadoComponent };
//# sourceMappingURL=detail-empleado.component.js.map