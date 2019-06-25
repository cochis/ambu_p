import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AmbulanciasService } from '../../../../services/ambulanciasService';
import { Ambulancia } from '../../../../models/ambulancia';
var AmbulanciaDetailComponent = /** @class */ (function () {
    function AmbulanciaDetailComponent(_router, _route, _ambulanciasService) {
        this._router = _router;
        this._route = _route;
        this._ambulanciasService = _ambulanciasService;
        this.actualizar = false;
        this.ambulancia = new Ambulancia(0, '', '', '', '', '', '', false, '', '');
    }
    AmbulanciaDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.subscribe(function (params) {
            _this.clvAmbulancia = params.clvAmbulancia;
            _this._ambulanciasService.getAmbulanciaByClv(_this.clvAmbulancia).subscribe(function (response) {
                _this.ambulancia = response;
                console.log(response);
            }, function (error) {
                console.log(error);
            });
        });
    };
    AmbulanciaDetailComponent.prototype.onSubmit = function (form) {
        var _this = this;
        this._ambulanciasService.updateAmbulancia(this.clvAmbulancia, this.ambulancia).subscribe(function (response) {
            console.log(response);
            _this._router.navigate(['/intra/ambulancias']);
        }, function (error) {
            console.log(error);
        });
    };
    AmbulanciaDetailComponent.prototype.confirmacion = function () {
        this.actualizar = true;
    };
    AmbulanciaDetailComponent = tslib_1.__decorate([
        Component({
            selector: 'app-ambulancia-detail',
            templateUrl: './ambulancia-detail.component.html'
        }),
        tslib_1.__metadata("design:paramtypes", [Router,
            ActivatedRoute,
            AmbulanciasService])
    ], AmbulanciaDetailComponent);
    return AmbulanciaDetailComponent;
}());
export { AmbulanciaDetailComponent };
//# sourceMappingURL=ambulancia-detail.component.js.map