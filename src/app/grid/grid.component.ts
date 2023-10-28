import { Component, HostBinding, OnInit, ViewChild } from '@angular/core';
import { IgxGridComponent } from 'igniteui-angular';
import { DATA } from './data'
@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
  @ViewChild('grid1', { read: IgxGridComponent, static: true })
  public grid1: IgxGridComponent;

  public data: {
    ProductName: string;
    QuantityPerUnit: number;
    UnitPrice: number;
    OrderDate: string;
    Discontinued: boolean;
}[];

  public size = 'large';
  public sizes: any;

  constructor() {
  }
  public ngOnInit(): void {
      this.data = DATA;
      this.sizes = [
          {
              label: 'pequeño',
              selected: this.size === 'small',
              togglable: true
          },
          {
              label: 'mediano',
              selected: this.size === 'medium',
              togglable: true
          },
          {
              label: 'grande',
              selected: this.size === 'large',
              togglable: true
          }
      ];
  }

  @HostBinding('style.--ig-size')
  protected get sizeStyle() {
      return `var(--ig-size-${this.size})`;
  }

  public selectSize(event: any) {
      this.size = this.sizes[event.index].label;
      this.grid1.reflow();
  }

  public formatDate(val: string) {
      if (val !== 'Select All') {
          const date = new Date(val);
          return new Intl.DateTimeFormat('en-US').format(date);
      } else {
          return val;
      }
  }

  public formatCurrency(val: string) {
      return parseInt(val, 10).toFixed(2);
  }
}
