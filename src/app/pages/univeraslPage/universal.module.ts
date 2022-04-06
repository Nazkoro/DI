import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UniversalComponent } from './universal.component';
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {Page1Component} from "../pages1/page1/page1.component";
import {Page1Module} from "../pages1/page1/page1.module";
import {Page2Module} from "../pages2/page2/page2.module";
import {Page3Module} from "../pages3/page3/page3.module";



@NgModule({
  declarations: [
    UniversalComponent
  ],
  exports: [
    UniversalComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    Page1Module,
    Page2Module,
    Page3Module
  ]
})
export class UniversalModule { }
