import { Component, OnInit } from '@angular/core';
import { SearchDataService } from 'src/app/service/search-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private searchData: SearchDataService) { }

  ngOnInit() {
  }
  getSearchedData(postData: any) {
    this.searchData.storage = postData;
    this.router.navigate(['/result']);
  }

}

