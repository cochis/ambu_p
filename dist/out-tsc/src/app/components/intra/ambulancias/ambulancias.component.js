import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AmbulanciasService } from '../../../services/ambulanciasService';
import { SharedService } from '../../../services/shared';
var AmbulanciasComponent = /** @class */ (function () {
    function AmbulanciasComponent(_ambulanciasService, _sharedService) {
        this._ambulanciasService = _ambulanciasService;
        this._sharedService = _sharedService;
        this.desAct = false;
    }
    AmbulanciasComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.window = window.scroll(0, 0);
        this._ambulanciasService.getAmbulancias().subscribe(function (data) {
            _this.ambulancias = data;
            console.log(_this.ambulancias);
        }, function (error) {
            console.log(error);
        });
        this.cols = [
            { field: 'idAmbulancia', header: 'Id' },
            { field: 'nombre', header: 'Nombre' },
            { field: 'clvAmbulancia', header: 'C Clave de ambulancia' },
            { field: 'placa', header: 'Placa' },
            { field: 'numeroEconomico', header: 'Numero economico' },
            { field: 'marca', header: 'Marca' },
            { field: 'modelo', header: 'Modelo' },
            { field: 'activo', header: 'Activo' },
            { field: 'ultimaActualizacion', header: 'Ultima Actualizacion' },
            { field: 'fechaCreacion', header: 'fecha de creacion' }
        ];
    };
    AmbulanciasComponent.prototype.ngOnChanges = function () {
        var _this = this;
        this._ambulanciasService.getAmbulancias().subscribe(function (data) {
            // console.log(data);
            _this.ambulancias = data;
        }, function (err) {
            console.log(err);
        });
    };
    AmbulanciasComponent.prototype.cambiarEstado = function (cambio) {
        var _this = this;
        this.desAct = false;
        if (cambio.estado) {
            this._ambulanciasService.activate(cambio.clvAmbulancia, cambio.ambulancia).subscribe(function (data) {
                _this.ngOnChanges();
            }, function (error) {
                console.log(error);
            });
        }
        else {
            this._ambulanciasService.desactivate(cambio.clvAmbulancia, cambio.ambulancia).subscribe(function (data) {
                _this.ngOnChanges();
            }, function (error) {
                console.log(error);
            });
        }
    };
    AmbulanciasComponent.prototype.desactivar = function (estado, clvAmbulancia, ambulancia) {
        this.cambio = { 'estado': estado,
            'clvAmbulancia': clvAmbulancia,
            'ambulancia': ambulancia };
        // console.log(estado + '  ' + clvEmpleado);
        this.desAct = true;
    };
    AmbulanciasComponent = tslib_1.__decorate([
        Component({
            selector: 'app-ambulancias',
            templateUrl: './ambulancias.component.html'
        }),
        tslib_1.__metadata("design:paramtypes", [AmbulanciasService,
            SharedService])
    ], AmbulanciasComponent);
    return AmbulanciasComponent;
}());
export { AmbulanciasComponent };
//# sourceMappingURL=ambulancias.component.js.map