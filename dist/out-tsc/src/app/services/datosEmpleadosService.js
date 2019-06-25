import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Global } from './global';
import { SharedService } from './shared';
var DatosEmpleadoService = /** @class */ (function () {
    function DatosEmpleadoService(_http, _sharedService) {
        this._http = _http;
        this._sharedService = _sharedService;
        this.url = Global.url;
    }
    DatosEmpleadoService.prototype.getDatosEmpleados = function () {
        var token = this._sharedService.getLocal('token');
        var headers = new HttpHeaders();
        var headers = new HttpHeaders().set('Authorization', token);
        var slide = 'datos-empleado/datos';
        return this._http.get(this.url + slide, { headers: headers });
    };
    DatosEmpleadoService.prototype.getEmpleadoByClv = function (clv) {
        var token = this._sharedService.getLocal('token');
        var headers = new HttpHeaders().set('Authorization', token);
        var slide = 'empleados/' + clv + ' ';
        return this._http.get(this.url + slide, { headers: headers });
    };
    DatosEmpleadoService.prototype.updateEmpleado = function (clvEmpleado, empleado) {
        var clv = clvEmpleado;
        var params = JSON.stringify(empleado);
        var token = this._sharedService.getLocal('token');
        var headers = new HttpHeaders().set('Authorization', token);
        var slide = 'empleados/' + clv;
        return this._http.put(this.url + slide, empleado, { headers: headers });
    };
    DatosEmpleadoService.prototype.saveToken = function (clvEmpleado, empleado) {
        var clv = clvEmpleado;
        var params = JSON.stringify(empleado);
        var token = this._sharedService.getLocal('token');
        empleado.token = token;
        var headers = new HttpHeaders().set('Authorization', token);
        var slide = 'empleados/token/' + clv;
        return this._http.put(this.url + slide, empleado, { headers: headers });
    };
    DatosEmpleadoService.prototype.activate = function (clvEmpleado, empleado) {
        var clv = clvEmpleado;
        empleado.rolEmpleado = undefined;
        var params = JSON.stringify(empleado);
        var token = this._sharedService.getLocal('token');
        var headers = new HttpHeaders().set('Authorization', token);
        var slide = 'empleados/activar/' + clv;
        this.empleado = this._sharedService.getLocal('empleado');
        if (this.empleado) {
            empleado.ultimaModificacion = this.empleado.clvEmpleado;
            return this._http.put(this.url + slide, empleado, { headers: headers });
        }
    };
    DatosEmpleadoService.prototype.desactivate = function (clvEmpleado, empleado) {
        var clv = clvEmpleado;
        empleado.rolEmpleado = undefined;
        var params = JSON.stringify(empleado);
        var token = this._sharedService.getLocal('token');
        var headers = new HttpHeaders().set('Authorization', token);
        var slide = 'empleados/desactivar/' + clv;
        if (this.empleado) {
            empleado.ultimaModificacion = this.empleado.clvEmpleado;
            return this._http.put(this.url + slide, empleado, { headers: headers });
        }
    };
    DatosEmpleadoService.prototype.getClave = function (clv) {
        var token = this._sharedService.getLocal('token');
        var headers = new HttpHeaders().set('Authorization', token);
        var slide = 'empleados/busqueda/' + clv + '';
        return this._http.get(this.url + slide, { headers: headers });
    };
    DatosEmpleadoService.prototype.create = function (form, clv) {
        // console.log('entro');
        // console.log(form);
        // form.clvEmpleado = '123456';
        // form.nombrecompleto = undefined;
        // form.fechaIngreso = undefined;
        // form.clinicaImss = undefined;
        // form.clinicaImss = undefined;
        // form.rfc = undefined;
        // form.puesto = undefined;
        // form.sueldo = undefined;
        // form.horario = undefined;
        // form.curp = undefined;
        // form.nss = undefined;
        // form.telefonoMovil = undefined;
        // form.tipoSangre = undefined;
        // form.alergias = undefined;
        // form.domicilio = undefined;
        // form.estadoCivil = undefined;
        // form.hijos = undefined;
        // form.nombrePadre = undefined;
        // form.nombreMadre = undefined;
        // form.ultimaActualizacion = undefined;
        // form.activo = undefined;
        // form.genero = undefined;
        // form.telefonoCasa = undefined;
        form.entrada1 = undefined;
        form.entrada2 = undefined;
        form.entrada3 = undefined;
        form.entrada4 = undefined;
        form.entrada5 = undefined;
        form.entrada6 = undefined;
        form.entrada7 = undefined;
        form.salida1 = undefined;
        form.salida2 = undefined;
        form.salida3 = undefined;
        form.salida4 = undefined;
        form.salida5 = undefined;
        form.salida6 = undefined;
        form.salida7 = undefined;
        form.sueldo = Number(form.sueldo);
        form.activo = true;
        // form.horario = undefined;
        // form.hijos = undefined;
        form.horario = JSON.stringify(form.horario);
        form.hijos = JSON.stringify(form.hijos);
        var token = this._sharedService.getLocal('token');
        var headers = new HttpHeaders().set('Authorization', token);
        return this._http.post(this.url + "datos-empleado/" + clv, form, { headers: headers });
    };
    DatosEmpleadoService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient,
            SharedService])
    ], DatosEmpleadoService);
    return DatosEmpleadoService;
}());
export { DatosEmpleadoService };
//# sourceMappingURL=datosEmpleadosService.js.map