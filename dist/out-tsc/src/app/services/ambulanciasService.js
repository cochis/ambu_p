import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Global } from './global';
import { SharedService } from './shared';
var AmbulanciasService = /** @class */ (function () {
    function AmbulanciasService(_http, _sharedService) {
        this._http = _http;
        this._sharedService = _sharedService;
        this.url = Global.url;
    }
    // : Observable<any> 
    AmbulanciasService.prototype.getAmbulancias = function () {
        // const params = JSON.stringify(contacto);
        var token = this._sharedService.getLocal('token');
        var headers = new HttpHeaders().set('Authorization', token);
        var slide = 'ambulancias/';
        return this._http.get(this.url + slide, { headers: headers });
    };
    AmbulanciasService.prototype.getAmbulanciaByClv = function (clvAmbulancia) {
        // var params = JSON.stringify(empleado.rolEmpleado);
        var token = this._sharedService.getLocal('token');
        var headers = new HttpHeaders().set('Authorization', token);
        var slide = 'ambulancias/' + clvAmbulancia;
        return this._http.get(this.url + slide, { headers: headers });
    };
    AmbulanciasService.prototype.activate = function (clvAmbulancia, ambulancia) {
        var clv = clvAmbulancia;
        var params = JSON.stringify(ambulancia);
        var token = this._sharedService.getLocal('token');
        var headers = new HttpHeaders().set('Authorization', token);
        var slide = 'ambulancias/activar/' + clv;
        return this._http.put(this.url + slide, ambulancia, { headers: headers });
    };
    AmbulanciasService.prototype.updateAmbulancia = function (clvAmbulancia, ambulancia) {
        var clv = clvAmbulancia;
        var params = JSON.stringify(ambulancia);
        var token = this._sharedService.getLocal('token');
        var headers = new HttpHeaders().set('Authorization', token);
        var slide = 'ambulancias/' + clv;
        return this._http.put(this.url + slide, ambulancia, { headers: headers });
    };
    AmbulanciasService.prototype.desactivate = function (clvAmbulancia, ambulancia) {
        var clv = clvAmbulancia;
        var params = JSON.stringify(ambulancia);
        var token = this._sharedService.getLocal('token');
        var headers = new HttpHeaders().set('Authorization', token);
        var slide = 'ambulancias/desactivar/' + clv;
        return this._http.put(this.url + slide, ambulancia, { headers: headers });
    };
    AmbulanciasService.prototype.postAmbulancia = function (ambulancia) {
        var token = this._sharedService.getLocal('token');
        var headers = new HttpHeaders().set('Authorization', token);
        var slide = 'ambulancias/';
        return this._http.post(this.url + slide, ambulancia, { headers: headers });
    };
    AmbulanciasService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient,
            SharedService])
    ], AmbulanciasService);
    return AmbulanciasService;
}());
export { AmbulanciasService };
//# sourceMappingURL=ambulanciasService.js.map