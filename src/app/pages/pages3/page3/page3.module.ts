import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Page3Component } from './page3.component';
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";




@NgModule({
  declarations: [
    Page3Component
  ],
  exports: [Page3Component],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule
  ]
})
export class Page3Module { }
