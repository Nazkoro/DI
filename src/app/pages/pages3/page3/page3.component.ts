import {Component, AfterViewInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {ELEMENT_DATA} from "../../data";
import {MatPaginator} from "@angular/material/paginator";

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.css']
})
export class Page3Component implements AfterViewInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  constructor() {}

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;

  ngAfterViewInit() {
    // @ts-ignore
    this.dataSource.paginator = this.paginator;
  }
}
