import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
var EventService = /** @class */ (function () {
    function EventService(http) {
        this.http = http;
    }
    EventService.prototype.getEvents = function () {
        // return this.http.get('showcase/resources/data/calendarevents.json')
        //   .toPromise()
        //   .then(res => <any[]>res.json().data)
        //   .then(data => { return data; });
    };
    EventService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], EventService);
    return EventService;
}());
export { EventService };
//# sourceMappingURL=event.service.js.map