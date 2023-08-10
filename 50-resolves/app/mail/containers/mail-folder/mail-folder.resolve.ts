import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { MailService } from '../../mail.service';
import { Mail } from '../../models/mail.interface';

@Injectable() // useed as a middleware by getting the data from the router, we need to inject our servie
export class MailFolderResolve implements Resolve<Mail[]> {
  constructor(private mailService: MailService) {} 
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {//4. Activeted route snapshot contains the url and params and other data
                                                                      // Routere state looks at the state fo the router at tthis particular moment in time
    return this.mailService.getFolder(route.params.name); // 5. call the get folder but pass in the name of the folder from the activated route snapshot
  }
}