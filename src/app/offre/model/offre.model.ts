import {Employe} from '../../offre/model/employé.model';
export interface Offre {
    id: number;
    Emp: Employe;
    Villedep: string;
    Villearriv: string;
    Dateo: string;
  }