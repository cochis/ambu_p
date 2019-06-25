import * as tslib_1 from "tslib";
import { Router, ActivatedRoute } from '@angular/router';
import { Empleado } from '../../../models/empleado';
import { EmpleadoService } from '../../../services/empleado.service';
import { LoginEmpleadoService } from '../../../services/loginEmpleadosService';
import { Component } from '@angular/core';
import { SharedService } from '../../../services/shared';
var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(_route, _router, _empleadoService, _loginService, _sharedService) {
        this._route = _route;
        this._router = _router;
        this._empleadoService = _empleadoService;
        this._loginService = _loginService;
        this._sharedService = _sharedService;
        this.empleado = new Empleado(0, '', '', '', '', '', '', '', '', false, '', '', '', '');
        this.logueado = false;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        // console.log('inicia nav');
        this.empleado = this._sharedService.getLocal('empleado');
        // console.log('empelado getLocal');
        // console.log(this.empleado);
        this.getLocal();
    };
    NavbarComponent.prototype.ngDoCheck = function () {
        this.getLocal();
    };
    NavbarComponent.prototype.getLocal = function () {
        // console.log('entra a getlocala');
        this.empleado = this._sharedService.getLocal('empleado');
        // console.log(this.empleado);
        if (!this.empleado) {
            this.logueado = false;
        }
        else {
            this.logueado = true;
        }
        // console.log('El usuario esta    ' + this.logueado);
    };
    NavbarComponent.prototype.logout = function () {
        var _this = this;
        // console.log('saliendo de log');
        // console.log('imprime empleado antes de salr');
        // console.log(this.empleado);
        this._loginService.closeLogin(this.empleado).subscribe(function (res) {
            _this.empleado = null;
            localStorage.clear();
            sessionStorage.clear();
            // console.log('imprime logout');
            // console.log(res);
            _this._router.navigate(['/home']);
        }, function (err) {
            // console.log('err');
            console.log(err);
        });
    };
    NavbarComponent = tslib_1.__decorate([
        Component({
            selector: 'app-navbar',
            templateUrl: './navbar.component.html'
        }),
        tslib_1.__metadata("design:paramtypes", [ActivatedRoute,
            Router,
            EmpleadoService,
            LoginEmpleadoService,
            SharedService])
    ], NavbarComponent);
    return NavbarComponent;
}());
export { NavbarComponent };
//# sourceMappingURL=navbar.component.js.map