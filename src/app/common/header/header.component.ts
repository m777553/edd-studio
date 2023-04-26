import { Component, OnInit } from '@angular/core';
import {carouselOptions} from "./carouselOptions.constant";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  carouselOptionsHeader = carouselOptions

  constructor() { }

  ngOnInit(): void {
  }

}
