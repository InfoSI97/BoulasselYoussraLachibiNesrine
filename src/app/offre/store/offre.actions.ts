import { Offre } from './../model/offre.model';
import { createAction, props } from '@ngrx/store';
import {Update} from '@ngrx/entity';


export const loadoffres = createAction(
  '[Offres List] Load Offres via Service',
);

export const offresLoaded = createAction(
  '[Offres Effect] Offres Loaded Successfully',
  props<{offres: Offre[]}>()
);

export const createOffre = createAction(
  '[Create Offre Component] Create Offre',
  props<{offre: Offre}>()
);

export const deleteOffre = createAction(
  '[Offres List Operations] Delete Offre',
  props<{offreId: string}>()
);

export const updateOffre = createAction(
  '[Offres List Operations] Update Offre',
  props<{update: Update<Offre>}>()
);

export const offreActionTypes = {
  loadoffres,
  offresLoaded,
  createOffre,
  deleteOffre,
  updateOffre
};