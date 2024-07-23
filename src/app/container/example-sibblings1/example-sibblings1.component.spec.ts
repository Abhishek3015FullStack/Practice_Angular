import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleSibblings1Component } from './example-sibblings1.component';

describe('ExampleSibblings1Component', () => {
  let component: ExampleSibblings1Component;
  let fixture: ComponentFixture<ExampleSibblings1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExampleSibblings1Component]
    });
    fixture = TestBed.createComponent(ExampleSibblings1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
