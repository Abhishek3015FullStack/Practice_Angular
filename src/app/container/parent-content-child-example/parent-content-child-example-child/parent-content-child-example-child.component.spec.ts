import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentContentChildExampleChildComponent } from './parent-content-child-example-child.component';

describe('ParentContentChildExampleChildComponent', () => {
  let component: ParentContentChildExampleChildComponent;
  let fixture: ComponentFixture<ParentContentChildExampleChildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParentContentChildExampleChildComponent]
    });
    fixture = TestBed.createComponent(ParentContentChildExampleChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
