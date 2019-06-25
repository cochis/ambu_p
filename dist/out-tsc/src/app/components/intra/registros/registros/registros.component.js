import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { SharedService } from '../../../../services/shared';
import { RegistroService } from '../../../../services/registroService.sevice';
var RegistrosComponent = /** @class */ (function () {
    function RegistrosComponent(_registroService, _sharedService) {
        this._registroService = _registroService;
        this._sharedService = _sharedService;
        this.desAct = false;
    }
    RegistrosComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._registroService.getRegistros().subscribe(function (data) {
            _this.registros = data;
            console.log(_this.registros);
        }, function (error) {
            console.log(error);
        });
        this.cols = [
            { field: 'idRegistro', header: 'ID' },
            { field: 'clvRegistro', header: 'Registro' },
            { field: 'numeroFolio', header: 'Folio' },
            { field: 'fecha', header: 'Fecha' },
            { field: 'clvCliente', header: 'Cliente' },
            { field: 'nombrePaciente', header: 'Paciente' },
            { field: 'genero', header: 'Genero' },
            { field: 'edad', header: 'Edad' },
            { field: 'procedencia', header: 'Procedencia' },
            { field: 'destino', header: 'Destino' },
            { field: 'solicito', header: 'Solicito' },
            { field: 'clvServicio', header: 'Servicio' },
            { field: 'poliza', header: 'Poliza' },
            { field: 'siniestro', header: 'Siniestro' },
            { field: 'inciso', header: 'Inciso' },
            { field: 'reporte', header: 'Reporte' },
            { field: 'autorizacion', header: 'Autorizacion' },
            { field: 'clvEmpleados', header: 'Empleados' },
            { field: 'estado', header: 'Estado' },
            { field: 'ultimaActualizacion', header: 'Ultima actualizacion' },
            { field: 'observacion', header: 'Observaciones' },
            { field: 'ocupacion', header: 'Ocupacion' },
            { field: 'telefono', header: 'Telefono' },
            { field: 'odometro', header: 'Odometro' },
            { field: 'llamada', header: 'Hora llamada' },
            { field: 'ambulancia', header: 'Ambulancia' },
            { field: 'rt', header: 'RT' },
            { field: 'folioPm', header: 'Folio Paramedico' },
            { field: 'personal', header: 'personal' },
            { field: 'clvMembresia', header: 'clvMembresia' },
            { field: 'diagnostico', header: 'Diagnostico' },
            { field: 'categoria', header: 'Categoria' },
            { field: 'folioFactura', header: 'Foliofactura' },
            { field: 'costo', header: 'Costo' },
            { field: 'activo', header: 'Activo' },
            { field: 'fechaCreacion', header: 'Fecha de creacion' }
        ];
    };
    RegistrosComponent.prototype.ngOnChanges = function () {
        var _this = this;
        this._registroService.getRegistros().subscribe(function (data) {
            // console.log(data);
            _this.registros = data;
        }, function (err) {
            console.log(err);
        });
    };
    RegistrosComponent.prototype.cambiarEstado = function (cambio) {
        var _this = this;
        this.desAct = false;
        console.log(cambio);
        if (cambio.estado) {
            this._registroService.activate(cambio.clvRegistro, cambio.registro).subscribe(function (data) {
                _this.ngOnChanges();
            }, function (error) {
                console.log(error);
            });
        }
        else {
            this._registroService.desactivate(cambio.clvRegistro, cambio.registro).subscribe(function (data) {
                _this.ngOnChanges();
            }, function (error) {
                console.log(error);
            });
        }
    };
    RegistrosComponent.prototype.desactivar = function (estado, clvRegistro, registro) {
        this.cambio = { 'estado': estado,
            'clvRegistro': clvRegistro,
            'registro': registro };
        console.log(this.cambio);
        // console.log(estado + '  ' + clvEmpleado);
        this.desAct = true;
    };
    RegistrosComponent = tslib_1.__decorate([
        Component({
            selector: 'app-registros',
            templateUrl: './registros.component.html'
        }),
        tslib_1.__metadata("design:paramtypes", [RegistroService,
            SharedService])
    ], RegistrosComponent);
    return RegistrosComponent;
}());
export { RegistrosComponent };
//# sourceMappingURL=registros.component.js.map