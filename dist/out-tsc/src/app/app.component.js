import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { SharedService } from './services/shared';
import { Empleado } from './models/empleado';
var AppComponent = /** @class */ (function () {
    function AppComponent(_sharedService) {
        this._sharedService = _sharedService;
        this.title = 'Ambulancias Humanas';
        this.empleado = new Empleado(0, '', '', '', '', '', '', '', '', false, '', '', '', '');
    }
    AppComponent.prototype.ngOnInit = function () {
        this.empleado = this._sharedService.getLocal('empleado');
    };
    AppComponent.prototype.ngDoCheck = function () {
        this.empleado = this._sharedService.getLocal('empleado');
        this.getLocal();
        // console.log(this.empleado);
    };
    AppComponent.prototype.getLocal = function () {
        if (this.empleado) {
            return this.logueado = true;
        }
        else {
            return this.logueado = false;
        }
    };
    AppComponent = tslib_1.__decorate([
        Component({
            selector: 'app-root',
            templateUrl: './app.component.html'
        }),
        tslib_1.__metadata("design:paramtypes", [SharedService])
    ], AppComponent);
    return AppComponent;
}());
export { AppComponent };
//# sourceMappingURL=app.component.js.map