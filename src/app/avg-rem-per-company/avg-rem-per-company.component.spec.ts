import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvgRemPerCompanyComponent } from './avg-rem-per-company.component';

describe('AvgRemPerCompanyComponent', () => {
  let component: AvgRemPerCompanyComponent;
  let fixture: ComponentFixture<AvgRemPerCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvgRemPerCompanyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvgRemPerCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
