import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { EventService } from '../../../services/event.service';
import * as moment from 'moment';
var InicioComponent = /** @class */ (function () {
    function InicioComponent(eventService) {
        this.eventService = eventService;
    }
    InicioComponent.prototype.ngOnInit = function () {
        this.now = moment().format('YYYY-MM-DD');
        this.events = [
            {
                id: 1,
                title: "All Day Event.",
                start: "2017-02-01"
            },
            {
                id: 2,
                title: "All Day Event.",
                start: "2017-02-02"
            },
            {
                id: 3,
                title: "All Day Event.",
                start: "2017-02-03"
            },
            {
                id: 4,
                title: "All Day Event.",
                start: "2017-02-04"
            },
            {
                id: 5,
                title: "cumple",
                start: "2019-05-04"
            },
            {
                id: 5,
                title: "Dia de las madre",
                start: "2019-05-10"
            }
        ];
        // this.eventService.getEvents().then(events => { this.events = events; });
        this.options = {
            plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
            defaultDate: this.now,
            header: {
                left: 'prev,next',
                center: 'title',
                right: 'dayGridMonth,timeGridWeek,timeGridDay'
            },
            editable: true
        };
    };
    InicioComponent = tslib_1.__decorate([
        Component({
            selector: 'app-inicio',
            templateUrl: './inicio.component.html'
        }),
        tslib_1.__metadata("design:paramtypes", [EventService])
    ], InicioComponent);
    return InicioComponent;
}());
export { InicioComponent };
//# sourceMappingURL=inicio.component.js.map