import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Empleado } from '../../models/empleado';
import { EmpleadoService } from '../../services/empleado.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthGuardService } from '../../guards/auth-guard.service';
import { LoginEmpleado } from '../../models/loginEmpleado';
import { LoginEmpleadoService } from '../../services/loginEmpleadosService';
import { SharedService } from '../../services/shared';
var LoginComponent = /** @class */ (function () {
    function LoginComponent(_route, _router, _empleadoService, _loginService, _authGuard, _sharedService) {
        this._route = _route;
        this._router = _router;
        this._empleadoService = _empleadoService;
        this._loginService = _loginService;
        this._authGuard = _authGuard;
        this._sharedService = _sharedService;
        this.sessionDisplay = false;
        this.empleado = new Empleado(0, '', '', '', '', '', '', '', '', false, '', '', '', '');
        this.loginEmpleado = new LoginEmpleado(0, '', '', '', '');
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onSubmit = function (form) {
        var _this = this;
        this._empleadoService.login(form.value).subscribe(function (res) {
            _this.res = res;
            if (_this.res.error) {
                _this.sessionDisplay = true;
                _this.status = 'failed';
            }
            else {
                _this.empleado = _this.res;
                _this._loginService.create(_this.res).subscribe(function (res) {
                    _this.res = res;
                    if (!_this.res.error) {
                        _this._loginService.getByClv(_this.empleado.clvEmpleado).subscribe(function (res) {
                            _this.res = res;
                            if (!_this.res.error) {
                                _this._sharedService.setLocal('empleado', _this.empleado);
                                _this._sharedService.setLocal('token', _this.res.token);
                                _this._router.navigate(['/intra/home']);
                            }
                            else {
                                _this.status = 'failed';
                            }
                        }, function (err) {
                            _this.status = 'failed';
                        });
                    }
                    else {
                        _this.status = 'failed';
                    }
                }, function (err) {
                    _this.status = 'failed';
                });
            }
        }, function (err) {
            _this.status = 'failed';
        });
    };
    LoginComponent.prototype.restoreSession = function (empleado) {
        var _this = this;
        this._empleadoService.restore(empleado).subscribe(function (res) {
            _this.res = res;
            _this.empleado = _this.res;
            console.log(_this.empleado);
            _this._loginService.create(_this.res[0]).subscribe(function (res) {
                _this.sessionDisplay = false;
                var clvEmpleado = _this.empleado[0].clvEmpleado;
                _this._loginService.getByClv(clvEmpleado).subscribe(function (res) {
                    _this.res = res;
                    console.log(res);
                    if (!_this.res.error) {
                        _this.empleado[0].sesionesActivas = 1;
                        // 
                        _this._sharedService.setLocal('empleado', _this.empleado[0]);
                        _this._sharedService.setLocal('token', _this.res.token);
                        _this._router.navigate(['/intra/home']);
                    }
                    else {
                        _this.status = 'failed';
                    }
                }, function (err) {
                    _this.status = 'failed';
                });
            }, function (err) {
                _this.status = 'failed';
            });
        }, function (err) {
            _this.status = 'failed';
        });
    };
    LoginComponent.prototype.backLogin = function () {
        this.sessionDisplay = false;
        this._router.navigate(['/home']);
    };
    LoginComponent = tslib_1.__decorate([
        Component({
            selector: 'app-login',
            templateUrl: './login.component.html',
            styles: []
        }),
        tslib_1.__metadata("design:paramtypes", [ActivatedRoute,
            Router,
            EmpleadoService,
            LoginEmpleadoService,
            AuthGuardService,
            SharedService])
    ], LoginComponent);
    return LoginComponent;
}());
export { LoginComponent };
//# sourceMappingURL=login.component.js.map