import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleOfContentCheckedChildComponent } from './example-of-content-checked-child.component';

describe('ExampleOfContentCheckedChildComponent', () => {
  let component: ExampleOfContentCheckedChildComponent;
  let fixture: ComponentFixture<ExampleOfContentCheckedChildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExampleOfContentCheckedChildComponent]
    });
    fixture = TestBed.createComponent(ExampleOfContentCheckedChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
