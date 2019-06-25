import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Global } from './global';
import { SharedService } from './shared';
var LoginEmpleadoService = /** @class */ (function () {
    function LoginEmpleadoService(_http, _sharedService) {
        this._http = _http;
        this._sharedService = _sharedService;
        this.url = Global.url;
    }
    LoginEmpleadoService.prototype.getById = function (id) {
        var headers = new HttpHeaders();
        var slide = 'login/id/' + id;
        return this._http.get(this.url + slide, { headers: headers });
    };
    LoginEmpleadoService.prototype.getByClv = function (clv) {
        var headers = new HttpHeaders();
        var slide = 'login/clv/' + clv;
        return this._http.get(this.url + slide, { headers: headers });
    };
    LoginEmpleadoService.prototype.create = function (empleado) {
        return this._http.post(this.url + "login/", empleado);
    };
    LoginEmpleadoService.prototype.update = function (empleado) {
        return this._http.put(this.url + "login/actualizar/" + empleado.idEmpleado, empleado);
    };
    LoginEmpleadoService.prototype.closeLogin = function (empleado) {
        // console.log(empleado);
        return this._http.post(this.url + "login/closeLogin/" + empleado.clvEmpleado, empleado);
    };
    LoginEmpleadoService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient,
            SharedService])
    ], LoginEmpleadoService);
    return LoginEmpleadoService;
}());
export { LoginEmpleadoService };
//# sourceMappingURL=loginEmpleadosService.js.map