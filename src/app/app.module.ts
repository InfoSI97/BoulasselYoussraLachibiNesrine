import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './store/reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from "./in-memory-data.service";

import { CreateOffreComponent } from './offre/component/create-offre/create-offre.component';
import {OffreResolver } from './offre/offre.resolver';
import {OffresListComponent } from './offre/component/offres-list/offres-list.component';
import { EffectsModule } from '@ngrx/effects';
import { OffreModule } from './offre/offre.module';

const routes = [
  {
    path: 'offres',
    component: OffresListComponent,
    resolve: {
      offres: OffreResolver
    }
  },
  {path: 'create-offre', component: CreateOffreComponent},
  {path: '**', redirectTo: 'offres'}
];


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    OffreModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    EffectsModule.forRoot([OffreModule]),
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
      }),	
  ],
  providers: [OffreResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
