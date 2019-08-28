import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ResultService } from 'src/app/service/result.service';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-global-search',
  templateUrl: './global-search.component.html',
  styleUrls: ['./global-search.component.scss']
})
export class GlobalSearchComponent implements OnInit {
  @Input() orderNoData: string;
  @Input() caseNoData: string;
  @Input() category: string = 'Web Order ID';

  idList: any;

  postData: any = {
    orderNoData: this.orderNoData,
    caseNoData: this.caseNoData,
    category: this.category
  };

  AllStoredData: any = [];

  @Output() notifyParent: EventEmitter<any> = new EventEmitter();

  constructor(private service: ResultService) {
    this.service.getIdList()
      .then((data: any) => { this.idList = data.list });

  }
  ngOnInit() {
  }

  getSearchedData(value: number) {

    this.postData.orderNoData = this.orderNoData;
    this.postData.caseNoData = this.caseNoData;
    this.postData.category = this.category;
    this.notifyParent.emit(this.postData);

    let tempdata = [];
    isNullOrUndefined(localStorage.getItem("AllStoredData")) ? tempdata = [] : tempdata = JSON.parse(localStorage.getItem("AllStoredData"));

    if(tempdata.length<5){

      this.AllStoredData = (tempdata).concat(this.postData);
      localStorage.setItem("AllStoredData", JSON.stringify(this.AllStoredData));
    }
    else{
      console.log('array size exceeded...');
    }

  }

  onSelectedChange(value: string) {
    this.category = value;
  }
}
