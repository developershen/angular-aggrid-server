import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef
} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  api;
  // The following structure is an example of how to use the grid adapter.

  // These are the default column definitions and mappings to ag-grid.
  // See https://www.ag-grid.com/javascript-grid-column-definitions/
  columnDefs = [
    {
      field: 'id',
    },
    {
      field: 'name'
    },
  ];


  ngOnInit() {
    setTimeout(() => {
      this.api = `https://5bff0f87362b930013f652d1.mockapi.io/api/test?`;
    }, 100);
  }

  constructor() {}
}
