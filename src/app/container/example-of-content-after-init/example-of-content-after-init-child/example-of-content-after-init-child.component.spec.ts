import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleOfContentAfterInitChildComponent } from './example-of-content-after-init-child.component';

describe('ExampleOfContentAfterInitChildComponent', () => {
  let component: ExampleOfContentAfterInitChildComponent;
  let fixture: ComponentFixture<ExampleOfContentAfterInitChildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExampleOfContentAfterInitChildComponent]
    });
    fixture = TestBed.createComponent(ExampleOfContentAfterInitChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
