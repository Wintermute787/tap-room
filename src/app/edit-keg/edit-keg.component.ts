import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from '../models/kegs.model'

@Component({
  selector: 'app-edit-keg',
  templateUrl: './edit-keg.component.html',
  styleUrls: ['./edit-keg.component.css']
})
export class EditKegComponent {
  @Input() childSelectedKeg: Keg;
  @Output() clickedDone = new EventEmitter();
  saveEdits(childSelectedKeg, newName, newBrand, newPrice, newFlavor){
    childSelectedKeg.name = newName;
    childSelectedKeg.brand = newBrand;
    childSelectedKeg.price = newPrice;
    childSelectedKeg.flavor = newFlavor;
    this.clickedDone.emit();
}
}
