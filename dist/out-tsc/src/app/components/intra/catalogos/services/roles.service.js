import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Global } from '../../../../services/global';
import { SharedService } from 'src/app/services/shared';
var RolesService = /** @class */ (function () {
    function RolesService(_http, _sharedService) {
        this._http = _http;
        this._sharedService = _sharedService;
        this.url = Global.url;
    }
    RolesService.prototype.updateRol = function (clvRol, rol) {
        var clv = clvRol;
        var params = JSON.stringify(rol);
        var token = this._sharedService.getLocal('token');
        var headers = new HttpHeaders().set('Authorization', token);
        var slide = 'roles/' + clv;
        return this._http.put(this.url + slide, rol, { headers: headers });
    };
    // : Observable<any> 
    RolesService.prototype.getRoles = function () {
        // const params = JSON.stringify(contacto);
        var token = this._sharedService.getLocal('token');
        var headers = new HttpHeaders().set('Authorization', token);
        var slide = 'roles/';
        return this._http.get(this.url + slide, { headers: headers });
    };
    RolesService.prototype.getRolByClvRol = function (clvRol) {
        var token = this._sharedService.getLocal('token');
        var headers = new HttpHeaders().set('Authorization', token);
        var slide = 'roles/' + clvRol;
        return this._http.get(this.url + slide, { headers: headers });
    };
    RolesService.prototype.postRol = function (rol) {
        var token = this._sharedService.getLocal('token');
        var headers = new HttpHeaders().set('Authorization', token);
        var slide = 'roles/';
        return this._http.post(this.url + slide, rol, { headers: headers });
    };
    RolesService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient,
            SharedService])
    ], RolesService);
    return RolesService;
}());
export { RolesService };
//# sourceMappingURL=roles.service.js.map