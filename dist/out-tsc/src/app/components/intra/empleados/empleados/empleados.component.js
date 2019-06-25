import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Empleado } from '../../../../models/empleado';
import { EmpleadoService } from '../../../../services/empleado.service';
import { RolesService } from '../../catalogos/services/roles.service';
var EmpleadosComponent = /** @class */ (function () {
    function EmpleadosComponent(_empleadoService, _rolService) {
        this._empleadoService = _empleadoService;
        this._rolService = _rolService;
        this.displayEditar = false;
        this.displayMostrar = false;
        this.displayEstado = false;
        this.dtUs = false;
        this.loading = 0;
        this.desAct = false;
        this.dtsUsuario = new Empleado(0, '', '', '', '', '', '', '', '', false, '', '', '', '');
    }
    EmpleadosComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._empleadoService.getEmpleados().subscribe(function (data) {
            // console.log(data);
            _this.empleados = data;
            for (var i = 0; i < data.length; i++) {
                _this.rolByClv = _this.getRol(_this.empleados[i]);
            }
        }, function (err) {
            console.log(err);
        });
        this.cols = [
            { field: 'idEmpleado', header: 'Id' },
            { field: 'nombre', header: 'Nombre' },
            { field: 'apellidoPaterno', header: 'Apellido PAterno' },
            { field: 'apellidoMaterno', header: 'Apellido Materno' },
            { field: 'clvEmpleado', header: 'Clave de empleado' },
            { field: 'correoEmpleado', header: 'Correo electronico' },
            { field: 'usuario', header: 'Usuario' },
            { field: 'password', header: 'Password' },
            { field: 'rolEmpleado', header: 'Rol' },
            { field: 'fechaCreacion', header: 'fecha de creacion' },
            { field: 'activo', header: 'Activo' },
            { field: 'fechaSalida', header: 'Fecha de salida' },
            { field: 'ultimaActualizacion', header: 'Ultima actualizacion' },
            { field: 'ultimaModificacion', header: 'Ultimo quien modifico' }
        ];
    };
    EmpleadosComponent.prototype.ngOnChanges = function () {
        var _this = this;
        var empleadoRol;
        this._empleadoService.getEmpleados().subscribe(function (data) {
            // console.log(data);
            _this.empleados = data;
            for (var i = 0; i < data.length; i++) {
                _this.rolByClv = _this.getRol(_this.empleados[i]);
            }
            _this._empleadoService.getEmpleados().subscribe(function (data) {
                _this.empleados = data;
                // tslint:disable-next-line: prefer-for-of
                for (var i = 0; i < _this.empleados.length; i++) {
                    _this.rolByClv = _this.getRol(_this.empleados[i]);
                }
            });
        }, function (err) {
            console.log(err);
        });
    };
    EmpleadosComponent.prototype.getRol = function (empleado) {
        var _this = this;
        this._rolService.getRolByClvRol(empleado.rolEmpleado).subscribe(function (data) {
            for (var i = 0; i < _this.empleados.length; i++) {
                if (empleado.idEmpleado == _this.empleados[i].idEmpleado) {
                    _this.empleados[i].rolEmpleado = data.nombre;
                    break;
                }
            }
        });
    };
    EmpleadosComponent.prototype.editarEmpleado = function () {
        //   this._empleadoService.getEmpleadoByClv().subscribe(data => {
        //     this.empleado = data;
        //     console.log(data);
        //   });
        //   console.log('entro a editar');
        // this.displayEditar = true;
    };
    EmpleadosComponent.prototype.mostrarEmpleado = function () {
        this.displayMostrar = true;
    };
    EmpleadosComponent.prototype.estadoEmpleado = function () {
        this.displayEstado = true;
    };
    EmpleadosComponent.prototype.cambiarEstado = function (cambio) {
        var _this = this;
        this.desAct = false;
        if (cambio.estado) {
            this._empleadoService.activate(cambio.clvEmpleado, cambio.empleado).subscribe(function (data) {
                _this.ngOnChanges();
            }, function (error) {
                console.log(error);
            });
        }
        else {
            this._empleadoService.desactivate(cambio.clvEmpleado, cambio.empleado).subscribe(function (data) {
                _this.ngOnChanges();
            }, function (error) {
                console.log(error);
            });
        }
    };
    EmpleadosComponent.prototype.datosUsuario = function (rowData) {
        this.dtUs = true;
        this.dtsUsuario = rowData;
    };
    EmpleadosComponent.prototype.updateUsuario = function (form) {
        // console.log(form.value);
    };
    EmpleadosComponent.prototype.desactivar = function (estado, clvEmpleado, empleado) {
        this.cambio = { 'estado': estado,
            'clvEmpleado': clvEmpleado,
            'empleado': empleado };
        console.log(this.cambio);
        // console.log(estado + '  ' + clvEmpleado);
        this.desAct = true;
    };
    EmpleadosComponent = tslib_1.__decorate([
        Component({
            selector: 'app-empleados',
            templateUrl: './empleados.component.html'
        }),
        tslib_1.__metadata("design:paramtypes", [EmpleadoService,
            RolesService])
    ], EmpleadosComponent);
    return EmpleadosComponent;
}());
export { EmpleadosComponent };
//# sourceMappingURL=empleados.component.js.map