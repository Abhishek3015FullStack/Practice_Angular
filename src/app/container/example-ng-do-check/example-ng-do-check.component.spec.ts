import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleNgDoCheckComponent } from './example-ng-do-check.component';

describe('ExampleNgDoCheckComponent', () => {
  let component: ExampleNgDoCheckComponent;
  let fixture: ComponentFixture<ExampleNgDoCheckComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExampleNgDoCheckComponent]
    });
    fixture = TestBed.createComponent(ExampleNgDoCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
