var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, EventEmitter, Input, Output } from '@angular/core';
var EntryFormComponent = (function () {
    function EntryFormComponent() {
        this.formSubmit = new EventEmitter();
    }
    EntryFormComponent.prototype.ngOnInit = function () {
    };
    EntryFormComponent.prototype.submitEntry = function () {
        if (this.entry.title && this.entry.content) {
            this.formSubmit.emit(this.entry);
        }
    };
    return EntryFormComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", Object)
], EntryFormComponent.prototype, "entry", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], EntryFormComponent.prototype, "formSubmit", void 0);
EntryFormComponent = __decorate([
    Component({
        selector: 'app-entry-form',
        templateUrl: './entry-form.component.html',
        styleUrls: ['./entry-form.component.css']
    }),
    __metadata("design:paramtypes", [])
], EntryFormComponent);
export { EntryFormComponent };
//# sourceMappingURL=../../../../src/app/entry-form/entry-form.component.js.map