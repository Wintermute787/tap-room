import { Component, Output, EventEmitter } from '@angular/core';
import { Keg } from '../models/kegs.model';


@Component({
  selector: 'app-new-keg',
  templateUrl: './new-keg.component.html',
  styleUrls: ['./new-keg.component.css']
})
export class NewKegComponent  {
  @Output() sendKeg = new EventEmitter();
  addNewKeg(name: string, brand: string, price: number, flavor: string) {
    let newKeg = new Keg(name, brand, price, flavor, 134);
    this.sendKeg.emit(newKeg);
  }

}
