import { Component, Input, Output, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IServerSideGetRowsRequest } from 'ag-grid-community';

const ROW_MODEL_SERVER_SIDE = 'serverSide';
@Component({
  selector: 'app-serverside-grid-view',
  templateUrl: './serverside-grid-view.component.html',
  styleUrls: ['./serverside-grid-view.component.scss']
})

// A wrapper component for the ag-grid that uses ag-grid's server side model for backend pagination, filtering and sorting operations.
// Pagination is done with the infinite scroll, ag-grid's recommended approach
export class ServersideGridViewComponent {
  private gridApi;
  private _apiEndpoint;
  rowData: any[];
  @Input() maxBlocksInCache = 20;
  @Input()
  columnDefs = [];
  @Input()
  defaultColDefs = {};
  @Input()
  headerHeight = 50;
  @Input()
  rowHeight;
  @Input()
  rowModelType = ROW_MODEL_SERVER_SIDE;
  @Input()
  pageSize = 10;
  @Input()
  pagination = true;
  @Input()
  paginationAutoPageSize = true;

  @Input()
  set apiEndpoint(value: String) {
    if (value && this.gridApi) {
      this._apiEndpoint = value;
      // if user provides an api endpoint , we will use the default server side data source configured
      this.gridApi.setServerSideDatasource(this.DefaultServerSideDatasource());
    }
  }
  get apiEndpoint() {
    return this._apiEndpoint;
  }


  constructor(private http: HttpClient) {}

  onGridReady(params) {
    this.gridApi = params.api;
  }
  DefaultServerSideDatasource = () => {
    return {
      getRows: params => {
        const request: IServerSideGetRowsRequest = params.request;
        const page = request.startRow / this.pageSize + 1;
        const api = `${this.apiEndpoint}&perPage=${this.pageSize}&page=${page}`;
       
        this.http
          .get(api)
          .subscribe(
            data => {
              console.log(data['data']['resultsTotal']);
              const lastRow =  data['data']['resultsTotal'] <= params.lastRow ? data['data']['resultsTotal'] : -1;
              params.successCallback(data['data'].results, lastRow);
            },
            () => {
              params.failCallback();
            }
          );
      }
    };
  }
}
