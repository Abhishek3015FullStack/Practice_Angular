import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleOfDirectivesComponent } from './example-of-directives.component';

describe('ExampleOfDirectivesComponent', () => {
  let component: ExampleOfDirectivesComponent;
  let fixture: ComponentFixture<ExampleOfDirectivesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExampleOfDirectivesComponent]
    });
    fixture = TestBed.createComponent(ExampleOfDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
