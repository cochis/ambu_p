import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Global } from './global';
import { SharedService } from './shared';
var RegistroService = /** @class */ (function () {
    function RegistroService(_http, _sharedService) {
        this._http = _http;
        this._sharedService = _sharedService;
        this.url = Global.url;
    }
    // : Observable<any> 
    RegistroService.prototype.getRegistros = function () {
        console.log('list');
        var token = this._sharedService.getLocal('token');
        var headers = new HttpHeaders().set('Authorization', token);
        var slide = 'registro/';
        return this._http.get(this.url + slide, { headers: headers });
    };
    RegistroService.prototype.getRegistroByClv = function (clvRegistro) {
        // var params = JSON.stringify(empleado.rolEmpleado);
        var token = this._sharedService.getLocal('token');
        var headers = new HttpHeaders().set('Authorization', token);
        var slide = 'registro/' + clvRegistro;
        return this._http.get(this.url + slide, { headers: headers });
    };
    RegistroService.prototype.getRegistroByNombre = function (nombre) {
        // var params = JSON.stringify(empleado.rolEmpleado);
        var token = this._sharedService.getLocal('token');
        var headers = new HttpHeaders().set('Authorization', token);
        var slide = 'registro/nombre/' + nombre;
        return this._http.get(this.url + slide, { headers: headers });
    };
    RegistroService.prototype.ultimo = function () {
        var token = this._sharedService.getLocal('token');
        var headers = new HttpHeaders().set('Authorization', token);
        var slide = 'registro/busqueda/ultimo/';
        console.log(this.url + slide);
        return this._http.get(this.url + slide, { headers: headers });
    };
    RegistroService.prototype.activate = function (clvRegistro, registro) {
        var clv = clvRegistro;
        var params = JSON.stringify(registro);
        var token = this._sharedService.getLocal('token');
        var headers = new HttpHeaders().set('Authorization', token);
        var slide = 'registro/activar/' + clvRegistro;
        return this._http.put(this.url + slide, registro, { headers: headers });
    };
    RegistroService.prototype.updateRegistro = function (clvRegistro, registro) {
        var clv = clvRegistro;
        var params = JSON.stringify(registro);
        var token = this._sharedService.getLocal('token');
        var headers = new HttpHeaders().set('Authorization', token);
        var slide = 'registro/' + clv;
        return this._http.put(this.url + slide, registro, { headers: headers });
    };
    RegistroService.prototype.desactivate = function (clvRegistro, registro) {
        var clv = clvRegistro;
        var params = JSON.stringify(registro);
        var token = this._sharedService.getLocal('token');
        var headers = new HttpHeaders().set('Authorization', token);
        var slide = 'registro/desactivar/' + clv;
        return this._http.put(this.url + slide, registro, { headers: headers });
    };
    RegistroService.prototype.postRegistro = function (registro) {
        var token = this._sharedService.getLocal('token');
        var headers = new HttpHeaders().set('Authorization', token);
        var slide = 'registro/';
        return this._http.post(this.url + slide, registro, { headers: headers });
    };
    RegistroService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient,
            SharedService])
    ], RegistroService);
    return RegistroService;
}());
export { RegistroService };
//# sourceMappingURL=registroService.sevice.js.map