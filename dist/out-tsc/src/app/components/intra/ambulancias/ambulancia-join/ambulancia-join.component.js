import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AmbulanciasService } from '../../../../services/ambulanciasService';
import { SharedService } from '../../../../services/shared';
import { Ambulancia } from '../../../../models/ambulancia';
var AmbulanciaJoinComponent = /** @class */ (function () {
    function AmbulanciaJoinComponent(_ambulanciasService, _sharedService, _route, _router) {
        this._ambulanciasService = _ambulanciasService;
        this._sharedService = _sharedService;
        this._route = _route;
        this._router = _router;
        this.ingresar = false;
        this.ambulancia = new Ambulancia(0, '', '', '', '', '', '', false, '', '');
    }
    AmbulanciaJoinComponent.prototype.ngOnInit = function () {
    };
    AmbulanciaJoinComponent.prototype.onSubmit = function (form) {
        var _this = this;
        this._ambulanciasService.postAmbulancia(this.ambulancia).subscribe(function (res) {
            console.log(res);
            _this._router.navigate(['/intra/ambulancias']);
        }, function (error) {
            console.log(error);
        });
    };
    AmbulanciaJoinComponent.prototype.show = function (mes) {
        this.msgs.push({ severity: 'info', summary: 'Info Message', detail: 'PrimeNG rocks' });
    };
    AmbulanciaJoinComponent.prototype.hide = function () {
        this.msgs = [];
    };
    AmbulanciaJoinComponent.prototype.confirmacion = function () {
        this.ingresar = true;
    };
    AmbulanciaJoinComponent = tslib_1.__decorate([
        Component({
            selector: 'app-ambulancia-join',
            templateUrl: './ambulancia-join.component.html'
        }),
        tslib_1.__metadata("design:paramtypes", [AmbulanciasService,
            SharedService,
            ActivatedRoute,
            Router])
    ], AmbulanciaJoinComponent);
    return AmbulanciaJoinComponent;
}());
export { AmbulanciaJoinComponent };
//# sourceMappingURL=ambulancia-join.component.js.map