import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleOfNgOnInitChildComponent } from './example-of-ng-on-init-child.component';

describe('ExampleOfNgOnInitChildComponent', () => {
  let component: ExampleOfNgOnInitChildComponent;
  let fixture: ComponentFixture<ExampleOfNgOnInitChildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExampleOfNgOnInitChildComponent]
    });
    fixture = TestBed.createComponent(ExampleOfNgOnInitChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
