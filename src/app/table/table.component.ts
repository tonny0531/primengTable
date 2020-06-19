import { Component, OnInit } from '@angular/core';
import { CarService, Car } from '../car.service';
import { FormArray, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  cars: Car[];

  cols: any[];

  formArray: FormArray = new FormArray([]);

  constructor(private carService: CarService) { }

  ngOnInit() {
    this.carService.getCarsSmall().subscribe(cars => {
      cars.forEach(car =>
        this.formArray.push(new FormGroup({
          vin: new FormControl(car.vin),
          year: new FormControl(car.year),
          brand: new FormControl(car.brand),
          color: new FormControl(car.color),
        }))
      );
      this.cars = cars;
    });

    this.cols = [
      { field: 'vin', header: 'Vin' },
      { field: 'year', header: 'Year' },
      { field: 'brand', header: 'Brand' },
      { field: 'color', header: 'Color' }
    ];
  }
}
