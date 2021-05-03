import { InMemoryDbService } from 'angular-in-memory-web-api';
import {OFFRE} from "./OffresDATA";

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let offres = OFFRE;
           return { offres };
  }
}  
