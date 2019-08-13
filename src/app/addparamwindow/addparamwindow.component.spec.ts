import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddparamwindowComponent } from './addparamwindow.component';

describe('AddparamwindowComponent', () => {
  let component: AddparamwindowComponent;
  let fixture: ComponentFixture<AddparamwindowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddparamwindowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddparamwindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
