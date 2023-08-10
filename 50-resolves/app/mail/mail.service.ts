import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Mail } from './models/mail.interface';

@Injectable()
export class MailService {
  constructor(private http: Http) {}
  getFolder(folder: string): Observable<Mail[]> {// 1. Make get request which returns an observable with an array of mail
    return this.http
      .get(`/api/messages?folder=${folder}`)//2. make a url query based on the value that is passed in when this endpoint gets called, 
                                            //essentially putting the folder that property in the db.json into the url 
      .map(response => response.json()); // 3. map to json for the result
  }
}