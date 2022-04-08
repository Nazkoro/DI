import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Page1Component } from './page1.component';
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatTableModule} from "@angular/material/table";
import {FirstService} from "../../services/first.service";

@NgModule({
  declarations: [
    Page1Component
  ],
  exports: [Page1Component],
  imports: [
    CommonModule,
    MatPaginatorModule,
    MatTableModule
  ],
  providers: [{provide: FirstService, useClass: FirstService}]
})
export class Page1Module { }
