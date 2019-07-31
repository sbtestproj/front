import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableConfigsComponent } from './table-configs.component';

describe('TableConfigsComponent', () => {
  let component: TableConfigsComponent;
  let fixture: ComponentFixture<TableConfigsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableConfigsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableConfigsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
