import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { PlayersModule } from './players/players.module';
import { TeamsModule } from './teams/teams.module';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AppRoutingModule } from './app.routing';


@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    PlayersModule,
    TeamsModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
