import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Mail } from '../../models/mail.interface';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/pluck';

@Component({
  selector: 'mail-folder',
  styleUrls: ['mail-folder.component.scss'],
  template: `
    <h2>{{ title | async }}</h2>
    <mail-item
      *ngFor="let message of (messages | async)"
      [message]="message">
    </mail-item>
  `
})
export class MailFolderComponent {
  //8.  The data is being created at the end and the component is being loaded with the data
  //9. the url is probably triggered by a button which has a navigate method on it something like: 
  //10. this.router.navigate(['localhost:4200/messages?folder=${folder}', 'name']);
  //11. maybe the folder value comes off of the get for the db.json
  //12. maybe the name comes off of the activated route snapshot
  messages: Observable<Mail[]> = this.route.data.pluck('messages'); //13. we can grab a property from the data using pluck
  title: Observable<string> = this.route.params.pluck('name');
  constructor(private route: ActivatedRoute) {}
}
