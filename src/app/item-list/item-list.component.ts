import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  items: any[];
  
  constructor() { }

  ngOnInit() {
    this.items = [{'title':'Lorem ipsum'}, {'title':'Dolor sit'}]
  }

}
