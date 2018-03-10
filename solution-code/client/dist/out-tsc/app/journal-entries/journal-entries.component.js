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
import { JournalEntriesService } from '../shared/services/journal-entries.service';
var JournalEntriesComponent = (function () {
    function JournalEntriesComponent(entriesService) {
        this.entriesService = entriesService;
        this.entry = { title: '', content: '' };
    }
    JournalEntriesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.entriesService.getEntries()
            .then(function (res) {
            _this.entries = res;
        });
    };
    JournalEntriesComponent.prototype.submitEntry = function (entry) {
        var _this = this;
        this.entriesService.createEntry(entry)
            .then(function (res) {
            _this.entries.unshift(entry);
            _this.entry = { title: '', content: '' };
        })
            .catch(function (err) { return _this.entry = entry; });
    };
    return JournalEntriesComponent;
}());
JournalEntriesComponent = __decorate([
    Component({
        selector: 'app-journal-entries',
        templateUrl: './journal-entries.component.html',
        styleUrls: ['./journal-entries.component.css'],
        providers: [JournalEntriesService]
    }),
    __metadata("design:paramtypes", [JournalEntriesService])
], JournalEntriesComponent);
export { JournalEntriesComponent };
//# sourceMappingURL=../../../../src/app/journal-entries/journal-entries.component.js.map