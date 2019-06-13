import { Component, Input } from '@angular/core';
import { Keg } from '../models/kegs.model'

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})

export class CustomerListComponent  {
  @Input() childKegList: Keg[];

}
