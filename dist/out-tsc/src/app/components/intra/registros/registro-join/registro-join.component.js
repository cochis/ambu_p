import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Registro } from '../../../../models/registro';
import { RegistroService } from '../../../../services/registroService.sevice';
import { SharedService } from '../../../../services/shared';
import { Empleado } from '../../../../models/empleado';
import { EmpleadoService } from '../../../../services/empleado.service';
import { AmbulanciasService } from '../../../../services/ambulanciasService';
var RegistroJoinComponent = /** @class */ (function () {
    function RegistroJoinComponent(_registroService, _sharedService, _route, _router, _empleadoService, _ambulanciasService) {
        this._registroService = _registroService;
        this._sharedService = _sharedService;
        this._route = _route;
        this._router = _router;
        this._empleadoService = _empleadoService;
        this._ambulanciasService = _ambulanciasService;
        this.momentoActual = new Date();
        this.aig = false;
        this.ama = false;
        this.atl = false;
        this.gmm = false;
        this.bxc = false;
        this.clb = false;
        this.hbm = false;
        this.mmb = false;
        this.mlt = false;
        this.prt = false;
        this.hpd = false;
        this.wtc = false;
        this.ingresar = false;
        // tslint:disable-next-line: max-line-length
        this.registro = new Registro(0, '', '', '', '', '', '', 0, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', false, '');
        this.empleado = new Empleado(0, '', '', '', '', '', '', '', '', false, '', '', '', '');
    }
    RegistroJoinComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._empleadoService.getEmpleados().subscribe(function (data) {
            _this.empleados = data;
            console.log(data);
        });
        this._ambulanciasService.getAmbulancias().subscribe(function (data) {
            _this.ambulancias = data;
            console.log(data);
        });
        this._registroService.ultimo().subscribe(function (response) {
            console.log(response.idRegistro + 1);
            _this.registro.numeroFolio = response.idRegistro + 1;
            _this.horaSalida = setInterval(function () {
                this.momentoActual = new Date();
                this.hora = this.momentoActual.getHours();
                this.minuto = this.momentoActual.getMinutes();
                this.segundo = this.momentoActual.getSeconds();
                this.horaImprimible = this.hora + " : " + this.minuto + " : " + this.segundo;
                this.registro.llamada = this.horaImprimible;
                this.registro.fecha = this.momentoActual;
                this.ngOnChanges();
            }.bind(_this), 1000);
        });
    };
    // tslint:disable-next-line: use-life-cycle-interface
    RegistroJoinComponent.prototype.ngOnChanges = function () {
        if (this.registro.clvCliente == 'AIG-01') {
            this.aig = true;
        }
        else {
            this.aig = false;
        }
        if (this.registro.clvCliente == 'AMA-02') {
            this.ama = true;
        }
        else {
            this.ama = false;
        }
        if (this.registro.clvCliente == 'ATL-03') {
            this.atl = true;
        }
        else {
            this.atl = false;
        }
        if (this.registro.clvCliente == 'AGM-04') {
            this.gmm = true;
        }
        else {
            this.gmm = false;
        }
        if (this.registro.clvCliente == 'BXC-05') {
            this.bxc = true;
        }
        else {
            this.bxc = false;
        }
        if (this.registro.clvCliente == 'CLA-06') {
            this.clb = true;
        }
        else {
            this.clb = false;
        }
        if (this.registro.clvCliente == 'HBM-07') {
            this.hbm = true;
        }
        else {
            this.hbm = false;
        }
        if (this.registro.clvCliente == 'MBS-08') {
            this.mmb = true;
        }
        else {
            this.mmb = false;
        }
        if (this.registro.clvCliente == 'MLT-09') {
            this.mlt = true;
        }
        else {
            this.mlt = false;
        }
        if (this.registro.clvCliente == 'PTC-10') {
            this.prt = true;
        }
        else {
            this.prt = false;
        }
        if (this.registro.clvCliente == 'HPD-11') {
            this.hpd = true;
        }
        else {
            this.hpd = false;
        }
        if (this.registro.clvCliente == 'WTC-12') {
            this.wtc = true;
        }
        else {
            this.wtc = false;
        }
    };
    RegistroJoinComponent.prototype.onSubmit = function (registro) {
        var _this = this;
        console.log(this.registro);
        this._registroService.postRegistro(this.registro).subscribe(function (data) {
            console.log(data);
            if (data.error) {
                console.log(data.error);
                // this.show(data.error);
            }
            else {
                _this._router.navigate(['/intra/registros']);
            }
        });
    };
    RegistroJoinComponent.prototype.show = function (mes) {
        this.msgs.push({ severity: 'info', summary: 'Info Message', detail: 'PrimeNG rocks' });
    };
    RegistroJoinComponent.prototype.hide = function () {
        this.msgs = [];
    };
    RegistroJoinComponent.prototype.mueveReloj = function () {
        this.momentoActual = new Date();
        this.hora = this.momentoActual.getHours();
        this.minuto = this.momentoActual.getMinutes();
        this.segundo = this.momentoActual.getSeconds();
        this.horaImprimible = this.hora + " : " + this.minuto + " : " + this.segundo;
        console.log(this.horaImprimible);
    };
    RegistroJoinComponent.prototype.confirmacion = function () {
        this.ingresar = true;
    };
    RegistroJoinComponent = tslib_1.__decorate([
        Component({
            selector: 'app-registro-join',
            templateUrl: './registro-join.component.html'
        }),
        tslib_1.__metadata("design:paramtypes", [RegistroService,
            SharedService,
            ActivatedRoute,
            Router,
            EmpleadoService,
            AmbulanciasService])
    ], RegistroJoinComponent);
    return RegistroJoinComponent;
}());
export { RegistroJoinComponent };
//# sourceMappingURL=registro-join.component.js.map