import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleOfNgOnInitComponent } from './example-of-ng-on-init.component';

describe('ExampleOfNgOnInitComponent', () => {
  let component: ExampleOfNgOnInitComponent;
  let fixture: ComponentFixture<ExampleOfNgOnInitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExampleOfNgOnInitComponent]
    });
    fixture = TestBed.createComponent(ExampleOfNgOnInitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
