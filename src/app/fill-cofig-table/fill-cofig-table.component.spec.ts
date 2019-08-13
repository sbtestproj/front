import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FillCofigTableComponent } from './fill-cofig-table.component';

describe('FillCofigTableComponent', () => {
  let component: FillCofigTableComponent;
  let fixture: ComponentFixture<FillCofigTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FillCofigTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FillCofigTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
