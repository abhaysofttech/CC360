import { Component, OnInit, Input } from '@angular/core';
import { SearchDataService } from 'src/app/service/search-data.service';
import { ResultService } from 'src/app/service/result.service';

@Component({
  selector: 'app-local-search',
  templateUrl: './local-search.component.html',
  styleUrls: ['./local-search.component.scss']
})
export class LocalSearchComponent implements OnInit {

  @Input() category: string;
  @Input() orderNoData: string;
  @Input() caseNoData: string;
  selectedCategory: string = 'Select Module';
  public idArr: any;
  storedData: any = [];

  constructor(private searchData: SearchDataService, private service: ResultService) {
    this.category = this.searchData.storage ? this.searchData.storage.category : '';
    console.log('Category', this.category);
    this.service.getOrderId()
    .then((data: any) => {this.idArr = [data] });
  }

  ngOnInit() {
  }
  onOptionsSelected(event) {
    console.log('event..', event); 
    console.log('selected', this.selectedCategory);
   }

   getStoredData() {
    this.storedData = JSON.parse(localStorage.getItem("AllStoredData"));
    console.log('Inside local search...' + JSON.stringify(this.storedData));
  }
}
