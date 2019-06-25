import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AmbulanciasService } from '../../../../services/ambulanciasService';
import { Ambulancia } from '../../../../models/ambulancia';
var AmbulanciaViewComponent = /** @class */ (function () {
    function AmbulanciaViewComponent(_router, _route, _ambulanciasService) {
        this._router = _router;
        this._route = _route;
        this._ambulanciasService = _ambulanciasService;
        this.ambulancia = new Ambulancia(0, '', '', '', '', '', '', false, '', '');
    }
    AmbulanciaViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.subscribe(function (params) {
            _this.clvAmbulancia = params.clvAmbulancia;
            console.log(_this.clvAmbulancia);
            _this._ambulanciasService.getAmbulanciaByClv(_this.clvAmbulancia).subscribe(function (response) {
                _this.ambulancia = response;
                console.log(response);
            }, function (error) {
                console.log(error);
            });
        });
    };
    AmbulanciaViewComponent = tslib_1.__decorate([
        Component({
            selector: 'app-ambulancia-view',
            templateUrl: './ambulancia-view.component.html'
        }),
        tslib_1.__metadata("design:paramtypes", [Router,
            ActivatedRoute,
            AmbulanciasService])
    ], AmbulanciaViewComponent);
    return AmbulanciaViewComponent;
}());
export { AmbulanciaViewComponent };
//# sourceMappingURL=ambulancia-view.component.js.map