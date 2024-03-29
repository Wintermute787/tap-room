import { Component } from '@angular/core';
import {Keg} from './models/kegs.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tap Room';

  masterKegs: Keg[] = [
    new Keg('Pepsi', 'PepsiCO', 2, 'Cola', 124),
    new Keg('Dr.Pepper', 'PepsiCO', 1, 'Pepper', 124),
    new Keg('Sprite', 'CocaCola', 5, 'LemonLime', 124),
    new Keg('Squirt', 'CocaCola', 3, 'Grapefruit', 60),
    new Keg('Coke', 'CocaCola', 3, 'Cola', 20)
  ]
  selectedKeg: Keg;
    
  new: boolean = false;
  list: boolean = false;
  customer: boolean = true; 
  edit: boolean = false; 
  show: boolean = false;

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

  addKeg(newKeg: Keg){
    this.masterKegs.push(newKeg);
    this.new = false;
    this.list = true;
  
  }
  
  
  finishEditing() {
    this.edit = false; 
    this.show = true;
  }

  editKeg(clickedKeg: Keg){
    this.selectedKeg = clickedKeg;
    console.log(this.selectedKeg);
    
    this.open(4);
    this.show = false;
  }

}

    // sessionStorage.setItem('keg', JSON.stringify(newKeg));
    // console.log(sessionStorage.getItem('keg'));
    // sessionStorage.clear()