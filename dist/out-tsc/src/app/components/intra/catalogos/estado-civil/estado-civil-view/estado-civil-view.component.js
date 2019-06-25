import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { EstadoCivil } from 'src/app/models/estadoCivil';
import { EstadoCivilService } from '../../services/estadoCivil.service';
import { Router, ActivatedRoute } from '@angular/router';
var EstadoCivilViewComponent = /** @class */ (function () {
    function EstadoCivilViewComponent(_router, _route, _estadoCivilService) {
        this._router = _router;
        this._route = _route;
        this._estadoCivilService = _estadoCivilService;
        this.estadoCivil = new EstadoCivil(0, '', '', '', false, '', '');
    }
    EstadoCivilViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.subscribe(function (params) {
            _this.clvEstadoCivil = params.clvEstadoCivil;
            console.log(_this.clvEstadoCivil);
            _this._estadoCivilService.getEstadoCivil(_this.clvEstadoCivil).subscribe(function (response) {
                _this.estadoCivil = response;
                console.log(_this.estadoCivil);
            }, function (error) {
                console.log(error);
            });
        });
    };
    EstadoCivilViewComponent = tslib_1.__decorate([
        Component({
            selector: 'app-estado-civil-view',
            templateUrl: './estado-civil-view.component.html'
        }),
        tslib_1.__metadata("design:paramtypes", [Router,
            ActivatedRoute,
            EstadoCivilService])
    ], EstadoCivilViewComponent);
    return EstadoCivilViewComponent;
}());
export { EstadoCivilViewComponent };
//# sourceMappingURL=estado-civil-view.component.js.map