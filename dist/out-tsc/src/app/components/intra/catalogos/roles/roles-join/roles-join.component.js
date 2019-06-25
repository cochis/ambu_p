import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SharedService } from '../../../../../services/shared';
import { Rol } from '../../../../../models/rol';
import { RolesService } from '../../services/roles.service';
var RolesJoinComponent = /** @class */ (function () {
    function RolesJoinComponent(_rolesService, _sharedService, _route, _router) {
        this._rolesService = _rolesService;
        this._sharedService = _sharedService;
        this._route = _route;
        this._router = _router;
        this.rol = new Rol(0, '', '', '', '', '', '', '');
    }
    RolesJoinComponent.prototype.ngOnInit = function () {
        // this.permisos = {"rol":"Paramedico","clvRol":"OPR05","tipo":"administrativo","permisos":{"administrativo":{"empleados":{"create":false,"read":false,"update":false,"delete":false},"datosEmpleados":{"create":false,"read":false,"update":false,"delete":false},"ambulancias":{"create":false,"read":false,"update":false,"delete":false},"sitios":{"create":false,"read":false,"update":false,"delete":false},"localidades":{"create":false,"read":false,"update":false,"delete":false},"catalogos":{"Roles":{"create":false,"read":false,"update":false,"delete":false},"estadoCivil":{"create":false,"read":false,"update":false,"delete":false}}},"operativo":{"servicios":{"create":false,"read":false,"update":false,"delete":false},"inventarios":{"create":false,"read":false,"update":false,"delete":false},"reportesAmbulancias":{"create":false,"read":false,"update":false,"delete":false},"registroPacientes":{"create":false,"read":false,"update":false,"delete":false}},"clientesMembresias":{"clientes":{"create":false,"read":false,"update":false,"delete":false},"membresias":{"create":false,"read":false,"update":false,"delete":false},"reportesAmbulancias":{"create":false,"read":false,"update":false,"delete":false},"registroPacientes":{"create":false,"read":false,"update":false,"delete":false}},"catalogos":{"roles":{"create":false,"read":false,"update":false,"delete":false},"estadoCivil":{"create":false,"read":false,"update":false,"delete":false}}}};
    };
    RolesJoinComponent.prototype.onSubmit = function (form) {
        var _this = this;
        this.rol.permisos = JSON.stringify(this.permisos);
        console.log(this.rol);
        this._rolesService.postRol(this.rol).subscribe(function (data) {
            console.log(data);
            _this._router.navigate(['/intra/roles']);
        }, function (error) {
            console.log(error);
        });
    };
    RolesJoinComponent.prototype.show = function (mes) {
        this.msgs.push({ severity: 'info', summary: 'Info Message', detail: 'PrimeNG rocks' });
    };
    RolesJoinComponent.prototype.hide = function () {
        this.msgs = [];
    };
    RolesJoinComponent = tslib_1.__decorate([
        Component({
            selector: 'app-roles-join',
            templateUrl: './roles-join.component.html'
        }),
        tslib_1.__metadata("design:paramtypes", [RolesService,
            SharedService,
            ActivatedRoute,
            Router])
    ], RolesJoinComponent);
    return RolesJoinComponent;
}());
export { RolesJoinComponent };
//# sourceMappingURL=roles-join.component.js.map