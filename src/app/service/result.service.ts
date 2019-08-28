import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable(
  {
    providedIn: 'root'
  }
)
export class ResultService {

  dataList = './assets/list.json';
  url = 'http://10.76.176.72:8087/webservice/rest/ServiceBot/FAQ';
  orderId = './assets/orderId.json';
  idlist = './assets/idList.json';
  resultActions = './assets/resultActions.json';
  skuResult = './assets/skuResult.json';
  dummyData = './assets/dummySKU.json';

  constructor(private _http: HttpClient) { }

  getJsonData() {
    return this._http.get(this.url).toPromise();
  }
  getSKUList() {
    return this._http.get(this.dataList).toPromise();
  }
  getOrderId() {
    return this._http.get(this.orderId).toPromise();
  }
  getIdList() {
    return this._http.get(this.idlist).toPromise();
  }
  getRecommendedActions() {
    return this._http.get(this.resultActions).toPromise();
  }
  getSKUResult() {
    return this._http.get(this.skuResult).toPromise();
  }
  getDummySKU() {
    return this._http.get(this.dummyData).toPromise();
  }

}
