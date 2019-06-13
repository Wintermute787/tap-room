import { AppComponent } from "../app.component";

export class Keg {
    constructor(public name: string, public brand: string, public price: number, public flavor: string, public contents: number) {}

    saveEdits(newName, newBrand, newPrice, newFlavor){
        console.log(newName);
        console.log(newBrand);
        console.log(newPrice);
        console.log(newFlavor);
        this.name = newName;
        this.brand = newBrand;
        this.price = newPrice;
        this.flavor = newFlavor;
    }
}