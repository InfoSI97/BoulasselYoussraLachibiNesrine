import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OffreService } from './services/offre.service';
import { OffreEffects } from './store/offre.effects';
import { FormsModule } from '@angular/forms';

import { OffresListComponent } from './component/offres-list/offres-list.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { offreReducer } from './store/offre.reducers';
import { CreateOffreComponent } from './component/create-offre/create-offre.component';
@NgModule({
  declarations: [ 
    OffresListComponent,
    CreateOffreComponent,
  ],
  imports: [
    CommonModule, 
    FormsModule, 
    StoreModule.forFeature('offres', offreReducer),
    EffectsModule.forFeature([OffreEffects])
  ],
  providers: [OffreService],
  bootstrap: [],
  exports: [
    OffresListComponent,
    CreateOffreComponent, 
  ]
})
export class OffreModule { }
