import { Component } from '@angular/core';
import {Keg} from './models/kegs.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tap Room';

  thisKeg: Keg = new Keg('Pepsi', 'PepsiCO', 2, 'Cola', 124)

  thisKeg2: Keg = new Keg('Dr.Pepper', 'PepsiCO', 1, 'Pepper', 124)

  thisKeg3: Keg = new Keg('Sprite', 'CocaCola', 5, 'LemonLime', 124)

  thisKeg4: Keg = new Keg('Squirt', 'CocaCola', 3, 'Grapefruit', 60)

  thisKeg5: Keg = new Keg('Coke', 'CocaCola', 3, 'Cola', 20)

  kegs: Keg[] = [
    this.thisKeg, 
    this.thisKeg2,
    this.thisKeg3,
    this.thisKeg4,
    this.thisKeg5
  ]
  
  new: boolean = false;
  list: boolean = true;
  customer: boolean = false; 
  edit: boolean = false; 
  show: boolean = true;

  open(id) {
    if (id === 1) {
      this.customer = false;
      this.list = false;
      this.new = true;
      this.edit = false;
    } else if (id === 2) {
      this.new = false;
      this.customer = false;
      this.list = true;
      this.show = true;
    } else if (id === 3) {
      this.new = false;
      this.list = false;
      this.customer = true;
      this.edit = false;
      this.show = false;
    } else if (id === 4) {
      this.new = false;
      this.list = true;
      this.customer = false;
      this.show = false;
      this.edit = true;
    }
  }

  lowStock(keg) {
    if (keg.contents < 11) {
      return "card orange accent-2";
    } else {
      return "";
    }
  }

  highlight(keg) {
    if (keg.contents < 11) {
      return "card red";
    } else {
      return "";
    }
  }

  addNewKeg(name: string, brand: string, price: number, flavor: string) {
    let newKeg = new Keg(name, brand, price, flavor, 134);
    this.kegs.push(newKeg);
  }

  selectedKeg: Keg;

  editKeg(clickedKeg){
    this.selectedKeg = clickedKeg;
}
}

    // sessionStorage.setItem('keg', JSON.stringify(newKeg));
    // console.log(sessionStorage.getItem('keg'));
    // sessionStorage.clear()