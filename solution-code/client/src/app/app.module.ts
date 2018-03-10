import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { JournalEntriesComponent } from './journal-entries/journal-entries.component';
import { RouterModule, Routes } from '@angular/router';
import { JournalEntryComponent } from './journal-entry/journal-entry.component';
import { EntryFormComponent } from './entry-form/entry-form.component';

const routes: Routes = [
    { path: '', component: JournalEntriesComponent },
    { path: 'journal-entries/:id', component: JournalEntryComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    JournalEntriesComponent,
    JournalEntryComponent,
    EntryFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
