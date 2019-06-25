import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Rol } from '../../../../../models/rol';
import { RolesService } from '../../services/roles.service';
import { Router, ActivatedRoute } from '@angular/router';
var RolesPermisosComponent = /** @class */ (function () {
    function RolesPermisosComponent(_router, _route, _rolesService) {
        this._router = _router;
        this._route = _route;
        this._rolesService = _rolesService;
        this.selectedCities = [];
        this.selectedCategories = ['Technology', 'Sports'];
        this.checked = false;
        this.rol = new Rol(0, '', '', '', '', '', '', '');
    }
    RolesPermisosComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.subscribe(function (params) {
            _this.clvRol = params.clvRol;
            console.log(_this.clvRol);
            _this._rolesService.getRolByClvRol(_this.clvRol).subscribe(function (response) {
                console.log(response);
                _this.rol = response;
                _this.apermisos = response.permisos;
                _this.apermisos = JSON.parse(_this.apermisos);
                _this.permisos = _this.apermisos.permisos;
                _this.jsonCompleto = response.permisos;
                // this.permisos = this.apermisos;
                // this.permisos = this.permisos.permisos;
                // console.log(this.permisos.administrativo.empleados.create);
                // this.permisos = JSON.parse(this.permisos.permisos);
                // console.log("2");
                // this.permisos= JSON.parse(this.permisos.permisos);
                // console.log(this.permisos);
            }, function (error) {
                console.log(error);
            });
        });
    };
    RolesPermisosComponent.prototype.onSubmit = function (permisos) {
        var _this = this;
        // console.log( JSON.parse(this.jsonCompleto));
        this.jsonCompleto = JSON.parse(this.jsonCompleto);
        console.log(permisos);
        this.jsonCompleto.permisos = permisos;
        console.log(this.jsonCompleto.permisos);
        this.rol.permisos = JSON.stringify(this.jsonCompleto);
        this._rolesService.updateRol(this.rol.clvRol, this.rol).subscribe(function (data) {
            console.log(data);
            _this._router.navigate(['/intra/catalogos/roles']);
        }, function (error) {
            console.log(error);
        });
    };
    RolesPermisosComponent = tslib_1.__decorate([
        Component({
            selector: 'app-roles-permisos',
            templateUrl: './roles-permisos.component.html'
        }),
        tslib_1.__metadata("design:paramtypes", [Router,
            ActivatedRoute,
            RolesService])
    ], RolesPermisosComponent);
    return RolesPermisosComponent;
}());
export { RolesPermisosComponent };
// console.log(this.empleado.rolEmpleado);
// this._rolesService.getRolByClvRol(this.empleado.rolEmpleado).subscribe(data => {
// this.permisos = JSON.parse(data.permisos);
// this.permisos = JSON.parse(this.permisos.permisos);
// this.permisos = this.permisos.permisos;
// console.log(this.permisos);
//# sourceMappingURL=roles-permisos.component.js.map