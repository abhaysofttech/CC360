import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ResultService } from 'src/app/service/result.service';
import { SearchDataService } from 'src/app/service/search-data.service';
import { Event, Router, NavigationStart, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
  providers: [ResultService]
})
export class ResultComponent implements OnInit {
  @Input() orderNoData: string;
  @Input() caseNoData: string;
  @Input() category: string;
  public listArr: any;
  public dataArr: any;
  public idArr: any;
  public actionsArr: any;
  public shouldShow = false;
  hideme = false;
  hide = false;
  isLoading = true;
  skuData: any;

  // tslint:disable-next-line: max-line-length
  constructor(
    private service: ResultService,
    private searchData: SearchDataService,
    private _router: Router) {
    this.orderNoData = this.searchData.storage ? this.searchData.storage.orderNoData : '';
    this.caseNoData = this.searchData.storage ? this.searchData.storage.caseNoData : '';
    this.category = this.searchData.storage ? this.searchData.storage.category : '';

    this._router.events.subscribe((routerEvent: Event) => { });
  }


  ngOnInit() {

    setTimeout(
      () => this.isLoading = !this.isLoading, 3000);

    this.service.getJsonData()
      .then((data: any) => { this.dataArr = [data] });

    this.service.getSKUList()
      .then((data: any) => { this.listArr = [data] });

    this.service.getOrderId()
      .then((data: any) => { this.idArr = [data] });

    this.service.getRecommendedActions()
      .then((data: any) => {
        console.log('data....' + data)
        this.actionsArr = data;
        this.actionsArr.result.filter(item => {
          item.active = false;
        });
      })
    //Initialise SKU DATA
    this.service.getDummySKU()
      .then((data: any) => {
        this.skuData = data
        this.skuData.sku.filter(item => {
          item.active = false;
        });
      });

  }
  showMinorSKU(i: any) {
    this.skuData.sku[i].active = !this.skuData.sku[i].active;
  }
  toggle() {
    this.hideme = !this.hideme;
  }
  showRecommendedActions(i: any) {
    this.actionsArr.result[i].active = !this.actionsArr.result[i].active;
  }

  // Code to get the SKU Data **************************
  getSkuData() {
    this.service.getDummySKU().
      then((data: any) => { this.skuData = data.list });
  }

}
