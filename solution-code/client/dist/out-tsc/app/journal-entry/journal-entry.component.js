var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JournalEntriesService } from '../shared/services/journal-entries.service';
var JournalEntryComponent = (function () {
    function JournalEntryComponent(entriesService, route) {
        this.entriesService = entriesService;
        this.route = route;
    }
    JournalEntryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .subscribe(function (params) {
            _this.entriesService.getEntry(params['id'])
                .then(function (res) { return _this.entry = res; });
        });
    };
    return JournalEntryComponent;
}());
JournalEntryComponent = __decorate([
    Component({
        selector: 'app-journal-entry',
        templateUrl: './journal-entry.component.html',
        styleUrls: ['./journal-entry.component.css'],
        providers: [JournalEntriesService]
    }),
    __metadata("design:paramtypes", [JournalEntriesService,
        ActivatedRoute])
], JournalEntryComponent);
export { JournalEntryComponent };
//# sourceMappingURL=../../../../src/app/journal-entry/journal-entry.component.js.map