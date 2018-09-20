import { NgModule } from '@angular/core';
import { RouterLinkActive, RouterModule, Routes } from '@angular/router';

import { HomeContainerComponent } from './home.component';

import { RoomsComponent } from './rooms/rooms.component';
import { InboxComponent } from './inbox/inbox.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';


const homeRoutes: Routes = [
  {
    path: '',
    component: HomeContainerComponent,
    //canActivate: [AuthGuard],
    children: [
      {
        path: '',
        //canActivateChild: [AuthGuard],
        children: [
          { path: '', component: RoomsComponent },
          { path: 'inbox', component: InboxComponent },
          { path: 'profile', component: ProfileComponent },
          { path: 'settings', component: SettingsComponent },
        ]
      }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forChild(homeRoutes) ],
  exports: [ RouterModule ]
})
export class HomeRoutingModule { }
