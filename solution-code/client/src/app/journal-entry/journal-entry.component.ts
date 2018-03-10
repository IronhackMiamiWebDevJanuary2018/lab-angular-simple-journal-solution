import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JournalEntriesService } from '../shared/services/journal-entries.service';

@Component({
  selector: 'app-journal-entry',
  templateUrl: './journal-entry.component.html',
  styleUrls: ['./journal-entry.component.css'],
  providers: [ JournalEntriesService ]

})
export class JournalEntryComponent implements OnInit {
  entry: Object

  constructor(
    private entriesService: JournalEntriesService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params
      .subscribe( (params) => {
        this.entriesService.getEntry(params['id'])
          .then((res) => this.entry = res)
      })
  }

}
