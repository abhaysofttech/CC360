import { Component, OnInit, Input } from '@angular/core';
import { SearchDataService } from 'src/app/service/search-data.service';
import { ResultService } from 'src/app/service/result.service';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss']
})
export class ActivitiesComponent implements OnInit {

  @Input() category: string;
  @Input() orderNoData: string;
  @Input() caseNoData: string;

  postData: any = {
    orderNoData: this.orderNoData,
    caseNoData: this.caseNoData,
    category: this.category
  };

  storedData: any = [];

  constructor(private searchData: SearchDataService, public service: ResultService) {
    this.category = this.searchData.storage ? this.searchData.storage.category : '';
    this.orderNoData = this.searchData.storage ? this.searchData.storage.orderNoData : '';
    this.caseNoData = this.searchData.storage ? this.searchData.storage.caseNoData : '';
  }

  ngOnInit() {
    this.getStoredData();
  }

  getStoredData() {
    this.storedData = JSON.parse(localStorage.getItem("AllStoredData"));
    console.log('Inside Activities...' + JSON.stringify(this.storedData));
  }

}
