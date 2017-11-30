import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {
  @Input('cols') cols: any;
  data;

  constructor() { }

  ngOnInit() {
    //this.cols = {'alias':'banaan', 'title':'Banaan'}, {'alias':'appel', 'title':'Apple'};
    this.data = [{'banaan':'Geel', 'appel': 'Groen'}, {'banaan':'Bruin', 'appel': 'Rood'}, ];
  }

  getValue(alias) {
    return alias;
  }
}
