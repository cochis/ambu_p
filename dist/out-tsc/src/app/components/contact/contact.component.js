import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Contacto } from '../../models/contacto';
import { ContactoService } from '../../services/contacto.service';
import { Router, ActivatedRoute } from '@angular/router';
var ContactComponent = /** @class */ (function () {
    function ContactComponent(_contactoService, _router, _route) {
        this._contactoService = _contactoService;
        this._router = _router;
        this._route = _route;
        this.msgs = [];
        this.contacto = new Contacto('', '', '', '', '', false, false);
        this.status = 'start';
    }
    ContactComponent.prototype.ngOnInit = function () {
        console.log('entro');
        this.window = window.scroll(0, 0);
    };
    ContactComponent.prototype.showSuccess = function () {
        this.msgs = [];
        this.msgs.push({ severity: 'success', summary: this.contacto.nombre, detail: 'Su mensaje ha sido enviado' });
    };
    ContactComponent.prototype.showError = function () {
        this.msgs = [];
        this.msgs.push({ severity: 'error', summary: 'Error Message', detail: 'Mensaje no envido' });
    };
    ContactComponent.prototype.onSubmit = function (form) {
        var _this = this;
        console.log(form.value);
        this._contactoService.sendContacto(form.value).subscribe(function (response) {
            console.log(response);
            if (response.message) {
                _this.status = 'success';
                form.reset();
                _this.showSuccess();
            }
            else {
                _this.status = 'failed';
                _this.showError();
            }
        }, function (error) {
            _this.showError();
        });
    };
    ContactComponent = tslib_1.__decorate([
        Component({
            selector: 'app-contact',
            templateUrl: './contact.component.html'
        }),
        tslib_1.__metadata("design:paramtypes", [ContactoService,
            Router,
            ActivatedRoute])
    ], ContactComponent);
    return ContactComponent;
}());
export { ContactComponent };
//# sourceMappingURL=contact.component.js.map