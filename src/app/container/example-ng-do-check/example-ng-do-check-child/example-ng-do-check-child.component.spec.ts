import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleNgDoCheckChildComponent } from './example-ng-do-check-child.component';

describe('ExampleNgDoCheckChildComponent', () => {
  let component: ExampleNgDoCheckChildComponent;
  let fixture: ComponentFixture<ExampleNgDoCheckChildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExampleNgDoCheckChildComponent]
    });
    fixture = TestBed.createComponent(ExampleNgDoCheckChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
