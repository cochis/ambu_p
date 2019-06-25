import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { EmpleadoService } from '../../../../services/empleado.service';
import { Router, ActivatedRoute } from '@angular/router';
import { RolesService } from '../../catalogos/services/roles.service';
var EmpleadoDetailComponent = /** @class */ (function () {
    function EmpleadoDetailComponent(_empleadoService, _rolService, _router, _route) {
        this._empleadoService = _empleadoService;
        this._rolService = _rolService;
        this._router = _router;
        this._route = _route;
        this.actualizar = false;
        this.displayEditar = false;
        this.displayMostrar = false;
        this.displayEstado = false;
        this.loading = 0;
        // this.empleado = new Empleado ( 0, '123', '', '', '', '', '', '', '', false, '', '' );
    }
    EmpleadoDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.subscribe(function (params) {
            _this.clvEmpleado = params.clvEmpleado;
            _this.getEmpleadoByClv(_this.clvEmpleado);
        });
        this._rolService.getRoles().subscribe(function (response) {
            _this.roles = response;
        }, function (error) {
            console.log(error);
        });
    };
    EmpleadoDetailComponent.prototype.getEmpleadoByClv = function (clv) {
        var _this = this;
        this._empleadoService.getEmpleadoByClv(clv).subscribe(function (response) {
            _this.empleado = response;
        }, function (error) {
            console.log(error);
        });
    };
    EmpleadoDetailComponent.prototype.onSubmit = function (updateForm) {
        var _this = this;
        this._empleadoService.updateEmpleado(this.clvEmpleado, this.empleado).subscribe(function (response) {
            _this._router.navigate(['/intra/empleados']);
        }, function (error) {
            console.log(error);
        });
    };
    EmpleadoDetailComponent.prototype.confirmacion = function () {
        this.actualizar = true;
    };
    EmpleadoDetailComponent = tslib_1.__decorate([
        Component({
            selector: 'app-empleado-detail',
            templateUrl: './empleado-detail.component.html'
        }),
        tslib_1.__metadata("design:paramtypes", [EmpleadoService,
            RolesService,
            Router,
            ActivatedRoute])
    ], EmpleadoDetailComponent);
    return EmpleadoDetailComponent;
}());
export { EmpleadoDetailComponent };
//# sourceMappingURL=empleado-detail.component.js.map