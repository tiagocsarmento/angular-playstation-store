import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css']
})
export class PriceComponent implements OnInit {
  @Input()
  gameName:string = ""
  @Input()
  pricing:string = ""
  @Input()
  category:string = ""
  constructor() { }

  ngOnInit(): void {
  }

}
