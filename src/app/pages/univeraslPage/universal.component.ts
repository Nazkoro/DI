import {AfterViewInit, OnInit, Component, Inject} from '@angular/core';
import {ServiceInterface} from "../interface/serviceInterface";
import {SIGNATURE_SERVICE, SignatureServiceProvider} from "../confis-service";

@Component({
  selector: 'app-universal',
  templateUrl: './universal.component.html',
  styleUrls: ['./universal.component.css'],
  providers: [SignatureServiceProvider]
})
export class UniversalComponent implements AfterViewInit, OnInit {
constructor(
  @Inject(SIGNATURE_SERVICE) protected dataService: ServiceInterface
) {
}

  ngOnInit() {
  }

  ngAfterViewInit() {
  }
}
