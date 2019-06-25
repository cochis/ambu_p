import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Global } from '../../../../services/global';
import { SharedService } from 'src/app/services/shared';
var EstadoCivilService = /** @class */ (function () {
    function EstadoCivilService(_http, _sharedService) {
        this._http = _http;
        this._sharedService = _sharedService;
        this.url = Global.url;
    }
    EstadoCivilService.prototype.getEstadosCiviles = function () {
        // const params = JSON.stringify(contacto);
        var token = this._sharedService.getLocal('token');
        var headers = new HttpHeaders().set('Authorization', token);
        var slide = 'estado-civil/';
        return this._http.get(this.url + slide, { headers: headers });
    };
    EstadoCivilService.prototype.getEstadoCivil = function (clvEstadoCivil) {
        var token = this._sharedService.getLocal('token');
        var headers = new HttpHeaders().set('Authorization', token);
        var slide = 'estado-civil/' + clvEstadoCivil;
        return this._http.get(this.url + slide, { headers: headers });
    };
    EstadoCivilService.prototype.postEstadoCivil = function (estadoCivil) {
        console.log(estadoCivil);
        var token = this._sharedService.getLocal('token');
        var headers = new HttpHeaders().set('Authorization', token);
        var slide = 'estado-civil/';
        return this._http.post(this.url + slide, estadoCivil, { headers: headers });
    };
    EstadoCivilService.prototype.updateEstadoCivil = function (clvEstadoCivil, estadoCivil) {
        var clv = clvEstadoCivil;
        var params = JSON.stringify(estadoCivil);
        var token = this._sharedService.getLocal('token');
        var headers = new HttpHeaders().set('Authorization', token);
        var slide = 'estado-civil/' + clv;
        return this._http.put(this.url + slide, estadoCivil, { headers: headers });
    };
    EstadoCivilService.prototype.desactivarEstadoCivil = function (clvEstadoCivil) {
        var clv = clvEstadoCivil;
        var token = this._sharedService.getLocal('token');
        var headers = new HttpHeaders().set('Authorization', token);
        var slide = 'estado-civil/desactivar/' + clv;
        return this._http.delete(this.url + slide, { headers: headers });
    };
    EstadoCivilService.prototype.activarEstadoCivil = function (clvEstadoCivil) {
        var clv = clvEstadoCivil;
        var token = this._sharedService.getLocal('token');
        var headers = new HttpHeaders().set('Authorization', token);
        var slide = 'estado-civil/activar/' + clv;
        return this._http.put(this.url + slide, { headers: headers });
    };
    EstadoCivilService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient,
            SharedService])
    ], EstadoCivilService);
    return EstadoCivilService;
}());
export { EstadoCivilService };
//# sourceMappingURL=estadoCivil.service.js.map