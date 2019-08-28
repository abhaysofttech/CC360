import { Component, OnInit } from '@angular/core';
import { ResultService } from 'src/app/service/result.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {
  public actionsArr: any;
  hideme = false;
  constructor(private service: ResultService) { }

  ngOnInit() {

    this.service.getRecommendedActions()
      .then((data: any) => {
        this.actionsArr = data;
        this.actionsArr.result.filter(item => {
          item.active = false;
        });
      });
  }
  showRecommendedActions(i: any) {
    this.actionsArr.result[i].active = !this.actionsArr.result[i].active;
  }
  showOrHideAllData(e) {
    console.log('e', e);
    this.actionsArr.result.filter(item => {
      if (e == false) {
        item.active = true;
      }
      else {
        item.active = false;

      }
    })
  }

}
