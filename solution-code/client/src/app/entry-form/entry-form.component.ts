import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-entry-form',
  templateUrl: './entry-form.component.html',
  styleUrls: ['./entry-form.component.css']
})
export class EntryFormComponent implements OnInit {
  @Input() entry
  @Output() formSubmit = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  submitEntry(){
    if (this.entry.title && this.entry.content){
      this.formSubmit.emit(this.entry);
    }
  }

}
