import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Global } from './global';
var ContactoService = /** @class */ (function () {
    function ContactoService(_http) {
        this._http = _http;
        this.url = Global.url;
    }
    ContactoService.prototype.sendContacto = function (contacto) {
        var params = JSON.stringify(contacto);
        var headers = new HttpHeaders().set('Content-Type', 'application/json');
        var slide = 'send-contacto/';
        return this._http.post(this.url + slide, params, { headers: headers });
    };
    ContactoService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], ContactoService);
    return ContactoService;
}());
export { ContactoService };
//# sourceMappingURL=contacto.service.js.map