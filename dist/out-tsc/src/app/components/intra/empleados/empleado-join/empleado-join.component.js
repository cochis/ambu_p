import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Empleado } from '../../../../models/empleado';
import { EmpleadoService } from '../../../../services/empleado.service';
import { RolesService } from '../../catalogos/services/roles.service';
import { Rol } from '../../../../models/rol';
import { SharedService } from '../../../../services/shared';
var EmpleadoJoinComponent = /** @class */ (function () {
    function EmpleadoJoinComponent(_empleadoService, _rolesService, _sharedService, _route, _router) {
        this._empleadoService = _empleadoService;
        this._rolesService = _rolesService;
        this._sharedService = _sharedService;
        this._route = _route;
        this._router = _router;
        this.ingresar = false;
        this.empleado = new Empleado(0, '', '', '', '', '', '', '', '', false, '', '', '', '');
        this.rol = new Rol(0, '', '', '', '', '', '', '');
        // this.value= new Confirmacion('',false);
    }
    EmpleadoJoinComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.empleado.clvEmpleado = this.obtenerClave();
        this._rolesService.getRoles().subscribe(function (response) {
            _this.roles = response;
        }, function (error) {
            console.log(error);
        });
    };
    EmpleadoJoinComponent.prototype.obtenerClave = function () {
        this.rol.clvRol = 'AMD01';
        var hoy = new Date();
        var yy = hoy.getFullYear();
        var mm = hoy.getMonth() + 1;
        var year = yy.toString();
        year = year.substr(2, 4);
        var mounth = mm.toString();
        if (mounth.length == 1) {
            mounth = '0' + mounth;
        }
        var clvR = this.rol.clvRol.substr(0, 2);
        var next = 0;
        var rdm = this._sharedService.ramdom();
        var busqueda = year + mounth + clvR + rdm.toUpperCase();
        return busqueda;
    };
    EmpleadoJoinComponent.prototype.onSubmit = function (empleado) {
        var _this = this;
        console.log(empleado);
        this._empleadoService.create(empleado).subscribe(function (data) {
            console.log(data);
            if (data.error) {
                _this.ingresar = false;
                console.log(data.error);
                // this.show(data.error);
            }
            else {
                _this._router.navigate(['/intra/empleados']);
            }
        });
    };
    EmpleadoJoinComponent.prototype.show = function (mes) {
        this.msgs.push({ severity: 'info', summary: 'Info Message', detail: 'PrimeNG rocks' });
    };
    EmpleadoJoinComponent.prototype.hide = function () {
        this.msgs = [];
    };
    EmpleadoJoinComponent.prototype.confirmacion = function () {
        this.ingresar = true;
    };
    EmpleadoJoinComponent = tslib_1.__decorate([
        Component({
            selector: 'app-empleado-join',
            templateUrl: './empleado-join.component.html'
        }),
        tslib_1.__metadata("design:paramtypes", [EmpleadoService,
            RolesService,
            SharedService,
            ActivatedRoute,
            Router])
    ], EmpleadoJoinComponent);
    return EmpleadoJoinComponent;
}());
export { EmpleadoJoinComponent };
//# sourceMappingURL=empleado-join.component.js.map