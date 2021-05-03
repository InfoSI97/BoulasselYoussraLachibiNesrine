import { areOffresLoaded } from './store/offre.selectors';
import { loadoffres, offresLoaded } from './store/offre.actions';
import { AppState } from './../store/reducers/index';
import { Offre } from './model/offre.model';
import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import { Observable } from 'rxjs';
import {select, Store} from '@ngrx/store';
import {filter, finalize, first, tap} from 'rxjs/operators';

@Injectable()
export class OffreResolver implements Resolve<Observable<any>> {

  constructor(private store: Store<AppState>) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.store
    .pipe(
        select(areOffresLoaded),
        tap((offresLoaded) => {
          console.log('111', offresLoaded);
          if (!offresLoaded) {
            this.store.dispatch(loadoffres());
          }

        }),
        filter(offresLoaded => offresLoaded),
        first()
    );
  }
}