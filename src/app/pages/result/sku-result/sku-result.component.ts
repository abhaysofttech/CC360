import { Component, OnInit } from '@angular/core';
import { ResultService } from 'src/app/service/result.service';

@Component({
  selector: 'app-sku-result',
  templateUrl: './sku-result.component.html',
  styleUrls: ['./sku-result.component.scss']
})
export class SkuResultComponent implements OnInit {
  skuData: any;
 
  constructor(private service:ResultService) { }

  ngOnInit() {
    this.service.getSKUResult()
    .then((data: any) => { this.skuData = data.sku });
  }
 
}
