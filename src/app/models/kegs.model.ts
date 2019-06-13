import { AppComponent } from "../app.component";

export class Keg {
    constructor(public name: string, public brand: string, public price: number, public flavor: string, public contents: number) {}
}