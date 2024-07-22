import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleOfContentCheckedComponent } from './example-of-content-checked.component';

describe('ExampleOfContentCheckedComponent', () => {
  let component: ExampleOfContentCheckedComponent;
  let fixture: ComponentFixture<ExampleOfContentCheckedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExampleOfContentCheckedComponent]
    });
    fixture = TestBed.createComponent(ExampleOfContentCheckedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
