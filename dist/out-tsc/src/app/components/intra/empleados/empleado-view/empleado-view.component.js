import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { EmpleadoService } from '../../../../services/empleado.service';
import { RolesService } from '../../catalogos/services/roles.service';
import { Router, ActivatedRoute } from '@angular/router';
var EmpleadoViewComponent = /** @class */ (function () {
    function EmpleadoViewComponent(_empleadoService, _rolService, _router, _route) {
        this._empleadoService = _empleadoService;
        this._rolService = _rolService;
        this._router = _router;
        this._route = _route;
        this.displayEditar = false;
        this.displayMostrar = false;
        this.displayEstado = false;
        this.loading = 0;
    }
    EmpleadoViewComponent.prototype.ngOnInit = function () {
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
    EmpleadoViewComponent.prototype.getEmpleadoByClv = function (clv) {
        var _this = this;
        this._empleadoService.getEmpleadoByClv(clv).subscribe(function (response) {
            _this.empleado = response;
        }, function (error) {
            console.log(error);
        });
    };
    EmpleadoViewComponent = tslib_1.__decorate([
        Component({
            selector: 'app-empleado-view',
            templateUrl: './empleado-view.component.html'
        }),
        tslib_1.__metadata("design:paramtypes", [EmpleadoService,
            RolesService,
            Router,
            ActivatedRoute])
    ], EmpleadoViewComponent);
    return EmpleadoViewComponent;
}());
export { EmpleadoViewComponent };
//# sourceMappingURL=empleado-view.component.js.map