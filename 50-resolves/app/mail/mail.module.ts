import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MailFolderComponent } from './containers/mail-folder/mail-folder.component';
import { MailItemComponent } from './components/mail-item/mail-item.component';
import { MailAppComponent } from './components/mail-app/mail-app.component';

import { MailFolderResolve } from './containers/mail-folder/mail-folder.resolve';
import { MailService } from './mail.service';

export const ROUTES: Routes = [
  {
    path: 'folder/:name', // 6. The name might be an alias for the value of the router param the is passed in from the service call to the endpoint
    component: MailFolderComponent,
    resolve: {
      messages: MailFolderResolve //7. we want the respose of the mailfolder reseolve
                                  // to be fuction against a property in the router, called messages
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [
    MailFolderComponent,
    MailAppComponent,
    MailItemComponent
  ],
  providers: [
    MailService, //import your service into the module
    MailFolderResolve
  ],
  exports: [
    MailAppComponent
  ]
})
export class MailModule {}
