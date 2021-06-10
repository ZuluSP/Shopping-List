import { Component, OnInit } from '@angular/core';
import { Item } from "../../models/Item";

import {ItemService} from '../../services/item.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  items: Item[] = [];

  total:number = 0;

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    //this.items = [];

    this.items = this.itemService.getItems();
  }

  deleteItem(item:Item){
    this.items = this.items.filter(x => x.id != item.id);
  }

  getTotal(){
    return this.total = this.items
        .filter(item => !item.completed)
        .map(item => item.quantity * item.price)
        .reduce((acc, item) => acc += item, 0);
      
      }

}
