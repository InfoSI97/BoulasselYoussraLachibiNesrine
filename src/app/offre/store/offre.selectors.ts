import { OffreState } from './offre.reducers';
import { Offre } from './../model/offre.model';
import { createSelector, createFeatureSelector } from '@ngrx/store';
import { selectAll, selectIds } from './offre.reducers';

export const offreFeatureSelector = createFeatureSelector<OffreState>('offres');

export const getAllOffres = createSelector(
 offreFeatureSelector,
  selectAll
);

export const areOffresLoaded = createSelector(
 offreFeatureSelector,
  state => state.offresLoaded
);