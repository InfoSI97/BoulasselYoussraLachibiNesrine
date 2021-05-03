import { Offre } from './../../model/offre.model';
import { Employe } from './../../model/employé.model';
import { createOffre } from './../../store/offre.actions';
import { AppState } from './../../../store/reducers/index';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import * as uuid from 'uuid';
import { empty } from 'rxjs';

@Component({
  selector: 'app-create-offre',
  templateUrl: './create-offre.component.html'
})
export class CreateOffreComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
  }

  onSubmit(submittedForm) {
    console.log(submittedForm.value);

    if (submittedForm.invalid) {
      return;
    }

    const offre: Offre = {
      id: uuid.v4(), 
      Emp:{idemp : submittedForm.value.idemp, nom :  submittedForm.value.nom,prenom: submittedForm.value.prenom, genre :submittedForm.value.genre, addresseemail : submittedForm.value.addresseemail},
      Villedep: submittedForm.value.Villedep,
      Villearriv: submittedForm.value.Villearriv,
      Dateo: submittedForm.value.Dateo,
     };
    this.store.dispatch(createOffre({offre}));

  }
}