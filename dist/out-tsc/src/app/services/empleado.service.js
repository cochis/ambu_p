import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Global } from './global';
import { SharedService } from './shared';
var EmpleadoService = /** @class */ (function () {
    function EmpleadoService(_http, _sharedService) {
        this._http = _http;
        this._sharedService = _sharedService;
        this.url = Global.url;
    }
    EmpleadoService.prototype.login = function (empleado) {
        return this._http.post(this.url + "empleados/login", empleado);
    };
    EmpleadoService.prototype.restore = function (empleado) {
        return this._http.post(this.url + "empleados/restore/", empleado);
    };
    EmpleadoService.prototype.returnToken = function (empleado) {
        return this._http.post(this.url + "empleados/loginToken", empleado);
    };
    EmpleadoService.prototype.isAutenticated = function () {
        this.empleado = this._sharedService.getLocal('empleado');
        if (!this.empleado) {
            return false;
        }
        this.token = this._sharedService.getLocal('token');
        if (!this.token) {
            return false;
        }
        return true;
    };
    EmpleadoService.prototype.getEmpleados = function () {
        var token = this._sharedService.getLocal('token');
        var headers = new HttpHeaders();
        var headers = new HttpHeaders().set('Authorization', token);
        var slide = 'empleados/emple';
        return this._http.get(this.url + slide, { headers: headers });
    };
    EmpleadoService.prototype.getEmpleadoByClv = function (clv) {
        var token = this._sharedService.getLocal('token');
        var headers = new HttpHeaders().set('Authorization', token);
        var slide = 'empleados/' + clv + ' ';
        return this._http.get(this.url + slide, { headers: headers });
    };
    EmpleadoService.prototype.updateEmpleado = function (clvEmpleado, empleado) {
        var clv = clvEmpleado;
        var params = JSON.stringify(empleado);
        var token = this._sharedService.getLocal('token');
        var headers = new HttpHeaders().set('Authorization', token);
        var slide = 'empleados/' + clv;
        return this._http.put(this.url + slide, empleado, { headers: headers });
    };
    EmpleadoService.prototype.saveToken = function (clvEmpleado, empleado) {
        var clv = clvEmpleado;
        var params = JSON.stringify(empleado);
        var token = this._sharedService.getLocal('token');
        empleado.token = token;
        var headers = new HttpHeaders().set('Authorization', token);
        var slide = 'empleados/token/' + clv;
        return this._http.put(this.url + slide, empleado, { headers: headers });
    };
    EmpleadoService.prototype.activate = function (clvEmpleado, empleado) {
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
    EmpleadoService.prototype.desactivate = function (clvEmpleado, empleado) {
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
    EmpleadoService.prototype.getClave = function (clv) {
        var token = this._sharedService.getLocal('token');
        var headers = new HttpHeaders().set('Authorization', token);
        var slide = 'empleados/busqueda/' + clv + ' ';
        return this._http.get(this.url + slide, { headers: headers });
    };
    EmpleadoService.prototype.create = function (form) {
        var token = this._sharedService.getLocal('token');
        var headers = new HttpHeaders().set('Authorization', token);
        return this._http.post(this.url + "empleados", form);
    };
    EmpleadoService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient,
            SharedService])
    ], EmpleadoService);
    return EmpleadoService;
}());
export { EmpleadoService };
//# sourceMappingURL=empleado.service.js.map