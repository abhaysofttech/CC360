import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkuResultComponent } from './sku-result.component';

describe('SkuResultComponent', () => {
  let component: SkuResultComponent;
  let fixture: ComponentFixture<SkuResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkuResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkuResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
