import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
  styleUrls: ['./total.component.css']
})
export class TotalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() total: number = 0;

  @Input() message: string = "";
}
