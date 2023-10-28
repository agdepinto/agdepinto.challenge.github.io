import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Option1Component } from './option1.component';

describe('Option1Component', () => {
  let component: Option1Component;
  let fixture: ComponentFixture<Option1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Option1Component]
    });
    fixture = TestBed.createComponent(Option1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
