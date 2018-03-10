import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class JournalEntriesService {
  BASE_URL: string = 'http://localhost:3000/api';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  getEntries(){
    return this.http.get(`${this.BASE_URL}/journal-entries`)
      .toPromise()
      .then((res: Response) => res.json())
  }

  getEntry(id){
    return this.http.get(`${this.BASE_URL}/journal-entries/${id}`)
      .toPromise()
      .then((res: Response) => res.json())
  }

  createEntry(entry){
    const stringified = JSON.stringify(entry);
    const options = { headers: this.headers };

    return this.http.post(
      `${this.BASE_URL}/journal-entries`,
      stringified,
      options
    )
      .toPromise()
      .then((response: Response) => response.json())
      .catch((error: Response) => Promise.reject(error ))
  }
}
