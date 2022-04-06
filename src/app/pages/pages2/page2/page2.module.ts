import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Page2Component } from './page2.component';
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";



@NgModule({
  declarations: [
    Page2Component
  ],
  exports: [Page2Component],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule
  ]
})
export class Page2Module { }
