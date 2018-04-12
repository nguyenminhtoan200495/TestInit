import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerListComponent } from './player-list/player-list.component';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { PlayersRoutingModule } from './players.routing';
import { PlayerProfileComponent } from './player-profile/player-profile.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    PlayersRoutingModule
  ],
  declarations: [PlayerListComponent, PlayerProfileComponent]
})
export class PlayersModule { }
