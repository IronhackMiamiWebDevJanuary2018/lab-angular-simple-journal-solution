var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
var JournalEntriesService = (function () {
    function JournalEntriesService(http) {
        this.http = http;
        this.BASE_URL = 'http://localhost:3000/api';
        this.headers = new Headers({ 'Content-Type': 'application/json' });
    }
    JournalEntriesService.prototype.getEntries = function () {
        return this.http.get(this.BASE_URL + "/journal-entries")
            .toPromise()
            .then(function (res) { return res.json(); });
    };
    JournalEntriesService.prototype.getEntry = function (id) {
        return this.http.get(this.BASE_URL + "/journal-entries/" + id)
            .toPromise()
            .then(function (res) { return res.json(); });
    };
    JournalEntriesService.prototype.createEntry = function (entry) {
        var stringified = JSON.stringify(entry);
        var options = { headers: this.headers };
        return this.http.post(this.BASE_URL + "/journal-entries", stringified, options)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(function (error) { return Promise.reject(error); });
    };
    return JournalEntriesService;
}());
JournalEntriesService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http])
], JournalEntriesService);
export { JournalEntriesService };
//# sourceMappingURL=../../../../../src/app/shared/services/journal-entries.service.js.map