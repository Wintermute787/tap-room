import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EditKegComponent } from './edit-keg/edit-keg.component';
import { NewKegComponent } from './new-keg/new-keg.component';
import { NavComponent } from './nav/nav.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
// import { FilterByPricePipe } from './filter-by-price.pipe';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    EditKegComponent,
    NewKegComponent,
    NavComponent,
    CustomerListComponent,
    // FilterByPricePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
