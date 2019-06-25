import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
var SharedService = /** @class */ (function () {
    function SharedService() {
    }
    SharedService.prototype.getLocal = function (key) {
        // const item = localStorage.getItem(key);
        var item = JSON.parse(sessionStorage.getItem(key));
        return item;
    };
    SharedService.prototype.setLocal = function (key, value) {
        sessionStorage.setItem(key, JSON.stringify(value));
    };
    SharedService.prototype.getSession = function (key) {
        var item = JSON.parse(sessionStorage.getItem(key));
        return item;
    };
    SharedService.prototype.setSession = function (key, value) {
        console.log('set ' + key);
        sessionStorage.setItem(key, JSON.stringify(value));
    };
    SharedService.prototype.ramdom = function () {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < 2; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    };
    SharedService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        })
    ], SharedService);
    return SharedService;
}());
export { SharedService };
//# sourceMappingURL=shared.js.map