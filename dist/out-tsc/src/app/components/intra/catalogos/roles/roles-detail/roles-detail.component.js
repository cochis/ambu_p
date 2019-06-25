import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Rol } from '../../../../../models/rol';
import { RolesService } from '../../services/roles.service';
import { Router, ActivatedRoute } from '@angular/router';
var RolesDetailComponent = /** @class */ (function () {
    function RolesDetailComponent(_router, _route, _rolesService) {
        this._router = _router;
        this._route = _route;
        this._rolesService = _rolesService;
        this.rol = new Rol(0, '', '', '', '', '', '', '');
    }
    RolesDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.subscribe(function (params) {
            _this.clvRol = params.clvRol;
            console.log(_this.clvRol);
            _this._rolesService.getRolByClvRol(_this.clvRol).subscribe(function (response) {
                _this.rol = response;
                console.log(_this.rol.permisos);
            }, function (error) {
                console.log(error);
            });
        });
    };
    RolesDetailComponent.prototype.onSubmit = function (updateForm) {
        var _this = this;
        console.log(updateForm.value);
        this.cambioRol = JSON.parse(this.rol.permisos);
        this.cambioRol.rol = this.rol.nombre;
        this.cambioRol.clvRol = this.rol.clvRol;
        this.rol.permisos = JSON.stringify(this.cambioRol);
        console.log(this.cambioRol.rol);
        this._rolesService.updateRol(this.clvRol, this.rol).subscribe(function (response) {
            console.log(response);
            _this._router.navigate(['/intra/catalogos/roles']);
        }, function (error) {
            console.log(error);
        });
    };
    RolesDetailComponent = tslib_1.__decorate([
        Component({
            selector: 'app-roles-detail',
            templateUrl: './roles-detail.component.html'
        }),
        tslib_1.__metadata("design:paramtypes", [Router,
            ActivatedRoute,
            RolesService])
    ], RolesDetailComponent);
    return RolesDetailComponent;
}());
export { RolesDetailComponent };
//# sourceMappingURL=roles-detail.component.js.map