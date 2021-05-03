import { Offre } from './../model/offre.model';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { offreActionTypes, offresLoaded } from './offre.actions';

export interface OffreState extends EntityState<Offre> {
 offresLoaded: boolean;
}

export const adapter: EntityAdapter<Offre> = createEntityAdapter<Offre>();

export const initialState = adapter.getInitialState({
  offresLoaded: false
});

export const offreReducer = createReducer(
  initialState,

  on(offreActionTypes.offresLoaded, (state, action) => {
    return adapter.addMany(
      action.offres,
      {...state, offresLoaded: true}
    );
  }),

  on(offreActionTypes.createOffre, (state, action) => {
    return adapter.addOne(action.offre, state);
  }),

  on(offreActionTypes.deleteOffre, (state, action) => {
    return adapter.removeOne(action.offreId, state);
  }),

  on(offreActionTypes.updateOffre, (state, action) => {
    return adapter.updateOne(action.update, state);
  })
);

export const { selectAll, selectIds } = adapter.getSelectors();