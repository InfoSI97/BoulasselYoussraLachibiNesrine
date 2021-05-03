import { getAllOffres } from '../../store/offre.selectors';
import { offreActionTypes } from '../../store/offre.actions';
import { AppState } from '../../../store/reducers/index';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Offre } from '../../model/offre.model';
import { OffreService } from '../../services/offre.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { Update } from '@ngrx/entity';

@Component({
  selector: 'app-offres-list',
  templateUrl: './offres-list.component.html'
})
export class OffresListComponent implements OnInit {

  offres$: Observable<Offre[]>;

  offreToBeUpdated: Offre;

  isUpdateActivated = false;

  constructor(private offreService: OffreService, private store: Store<AppState>) { }

  ngOnInit() {
    this.offres$ = this.store.select(getAllOffres);
  }

  deleteOffre(offreId: string) {
    this.store.dispatch(offreActionTypes.deleteOffre({offreId}));
  }

  showUpdateForm(offre: Offre) {
    this.offreToBeUpdated = {...offre};
    this.isUpdateActivated = true;
  }

  updateOffre(updateForm) {
    const update: Update<Offre> = {
      id: this.offreToBeUpdated.id,
      changes: {
        ...this.offreToBeUpdated,
        ...updateForm.value
      }
    };

    this.store.dispatch(offreActionTypes.updateOffre({update}));

    this.isUpdateActivated = false;
    this.offreToBeUpdated = null;
  }
}