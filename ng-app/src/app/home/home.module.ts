import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLinkActive, RouterModule, Routes } from '@angular/router';

import { HomeContainerComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';

import { RoomsComponent } from './rooms/rooms.component';
import { InboxComponent } from './inbox/inbox.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';


@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    RouterModule
  ],
  declarations: [
  	HomeContainerComponent,
  	RoomsComponent,
	  InboxComponent,
	  ProfileComponent,
    SettingsComponent
  ]
})
export class HomeModule { }
