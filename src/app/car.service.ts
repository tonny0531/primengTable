import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export class Car{
  vin?: string;
  year?: string;
  brand?: string;
  color?: string;
}

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor() { }

  getCarsSmall(): Observable<Car[]> {
      return of([
        { vin: 'dsad231ff', year: '2012', brand: 'VW1', color: 'Orange1' },
        { vin: 'asdzcqwew', year: '2013', brand: 'BMD', color: 'Orange2' },
        { vin: 'qwczxasew', year: '2014', brand: 'VW2', color: 'Orange3' },
        { vin: 'fd123rewd', year: '2015', brand: 'VW3', color: 'Orange4' },
        { vin: 'xczbe1235', year: '2016', brand: 'VW4', color: 'Orange5' }
      ]);
  }

}
