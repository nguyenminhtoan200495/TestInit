import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamListComponent } from './team-list/team-list.component';

import { BrowserModule } from '@angular/platform-browser';
import { TeamsRoutingModule } from './teams.routing';
import { TeamProfileComponent } from './team-profile/team-profile.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    TeamsRoutingModule
  ],
  declarations: [TeamListComponent, TeamProfileComponent]
})
export class TeamsModule { }
