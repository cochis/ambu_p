import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { EstadoCivil } from 'src/app/models/estadoCivil';
import { EstadoCivilService } from '../../services/estadoCivil.service';
import { Router, ActivatedRoute } from '@angular/router';
var EstadoCivilDetailComponent = /** @class */ (function () {
    function EstadoCivilDetailComponent(_router, _route, _estadoCivilService) {
        this._router = _router;
        this._route = _route;
        this._estadoCivilService = _estadoCivilService;
        this.estadoCivil = new EstadoCivil(0, '', '', '', false, '', '');
    }
    EstadoCivilDetailComponent.prototype.ngOnInit = function () {
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
    EstadoCivilDetailComponent.prototype.onSubmit = function (form) {
        var _this = this;
        console.log(form.value);
        this._estadoCivilService.updateEstadoCivil(this.clvEstadoCivil, this.estadoCivil).subscribe(function (response) {
            _this._router.navigate(['/intra/catalogos/estado-civil']);
        }, function (error) {
            console.log(error);
        });
    };
    EstadoCivilDetailComponent = tslib_1.__decorate([
        Component({
            selector: 'app-estado-civil-detail',
            templateUrl: './estado-civil-detail.component.html'
        }),
        tslib_1.__metadata("design:paramtypes", [Router,
            ActivatedRoute,
            EstadoCivilService])
    ], EstadoCivilDetailComponent);
    return EstadoCivilDetailComponent;
}());
export { EstadoCivilDetailComponent };
//# sourceMappingURL=estado-civil-detail.component.js.map