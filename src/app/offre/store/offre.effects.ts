import { offreActionTypes, offresLoaded, updateOffre } from './offre.actions';
import { OffreService } from '../services/offre.service';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { concatMap, map, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class OffreEffects {

  loadOffres$ = createEffect(() =>
    this.actions$.pipe(
      ofType(offreActionTypes.loadoffres),
      concatMap(() => this.offreService.getAllOffres()),
      map(offres => offreActionTypes.offresLoaded({offres}))
    )
  );

  createOffre$ = createEffect(() =>
    this.actions$.pipe(
      ofType(offreActionTypes.createOffre),
      concatMap((action) => this.offreService.createOffre(action.offre)),
      tap(() => this.router.navigateByUrl('/offre'))
    ),
    {dispatch: false}
  );

  deleteOffre$ = createEffect(() =>
    this.actions$.pipe(
      ofType(offreActionTypes.deleteOffre),
      concatMap((action) => this.offreService.deleteOffre(action.offreId))
    ),
    {dispatch: false}
  );

  updateOffre$ = createEffect(() =>
    this.actions$.pipe(
      ofType(offreActionTypes.updateOffre),
      concatMap((action) => this.offreService.updateOffre(action.update.id, action.update.changes))
    ),
    {dispatch: false}
  );

  constructor(private offreService: OffreService, private actions$: Actions, private router: Router) {}
}