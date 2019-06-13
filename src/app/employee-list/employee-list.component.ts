import { Component, Input, Output, EventEmitter } from '@angular/core';
import {  Keg } from '../models/kegs.model';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})

export class EmployeeListComponent  {
  @Input() childKegList: Keg[];
  @Output() clickSender = new EventEmitter();

  pour(selectedKeg: Keg){
    if (selectedKeg.contents > 0) {            
        return selectedKeg.contents--;
    }
  }

  highlight(keg) {
    if (keg.contents < 11) {
      return "highlight";
    } else {
      return "";
    }
  }

  editButtonClicked(kegToEdit: Keg) {
    this.clickSender.emit(kegToEdit)
  }
}
