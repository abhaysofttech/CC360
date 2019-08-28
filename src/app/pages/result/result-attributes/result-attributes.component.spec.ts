import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultAttributesComponent } from './result-attributes.component';

describe('ResultAttributesComponent', () => {
  let component: ResultAttributesComponent;
  let fixture: ComponentFixture<ResultAttributesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultAttributesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultAttributesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
