import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleOfContentAfterInitComponent } from './example-of-content-after-init.component';

describe('ExampleOfContentAfterInitComponent', () => {
  let component: ExampleOfContentAfterInitComponent;
  let fixture: ComponentFixture<ExampleOfContentAfterInitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExampleOfContentAfterInitComponent]
    });
    fixture = TestBed.createComponent(ExampleOfContentAfterInitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
