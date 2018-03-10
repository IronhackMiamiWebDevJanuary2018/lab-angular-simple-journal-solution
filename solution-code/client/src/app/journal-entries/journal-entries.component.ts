import { Component, OnInit } from '@angular/core';
import { JournalEntriesService } from '../shared/services/journal-entries.service';

@Component({
  selector: 'app-journal-entries',
  templateUrl: './journal-entries.component.html',
  styleUrls: ['./journal-entries.component.css'],
  providers: [ JournalEntriesService ]
})
export class JournalEntriesComponent implements OnInit {
  entries: Object[]
  entry: { title: string, content: string } = { title: '', content: '' }

  constructor(private entriesService: JournalEntriesService) { }

  ngOnInit() {
    this.entriesService.getEntries()
      .then( (res) => {
        this.entries = res;
      })
  }

  submitEntry(entry){
    this.entriesService.createEntry(entry)
      .then(
        (res) => {
          this.entries.unshift(entry)
          this.entry = { title: '', content: '' }
        }
      )
      .catch(
        err => this.entry = entry
      )
  }

}
