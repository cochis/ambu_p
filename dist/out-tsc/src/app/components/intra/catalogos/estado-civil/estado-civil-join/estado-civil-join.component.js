import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { EstadoCivil } from '../../../../../models/estadoCivil';
import { EstadoCivilService } from '../../services/estadoCivil.service';
import { SharedService } from 'src/app/services/shared';
var EstadoCivilJoinComponent = /** @class */ (function () {
    function EstadoCivilJoinComponent(_sharedService, _estadoCivilService) {
        this._sharedService = _sharedService;
        this._estadoCivilService = _estadoCivilService;
        this.estadoCivil = new EstadoCivil(0, '', '', '', false, '', '');
    }
    EstadoCivilJoinComponent.prototype.ngOnInit = function () {
    };
    EstadoCivilJoinComponent.prototype.onSubmit = function (form) {
        this._estadoCivilService.postEstadoCivil(this.estadoCivil).subscribe(function (response) {
            console.log(response);
        }, function (error) {
            console.log(error);
        });
    };
    EstadoCivilJoinComponent.prototype.show = function (mes) {
        this.msgs.push({ severity: 'info', summary: 'Info Message', detail: 'PrimeNG rocks' });
    };
    EstadoCivilJoinComponent.prototype.hide = function () {
        this.msgs = [];
    };
    EstadoCivilJoinComponent = tslib_1.__decorate([
        Component({
            selector: 'app-estado-civil-join',
            templateUrl: './estado-civil-join.component.html'
        }),
        tslib_1.__metadata("design:paramtypes", [SharedService,
            EstadoCivilService])
    ], EstadoCivilJoinComponent);
    return EstadoCivilJoinComponent;
}());
export { EstadoCivilJoinComponent };
//# sourceMappingURL=estado-civil-join.component.js.map