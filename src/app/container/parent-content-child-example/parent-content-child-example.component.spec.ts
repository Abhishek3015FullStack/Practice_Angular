import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentContentChildExampleComponent } from './parent-content-child-example.component';

describe('ParentContentChildExampleComponent', () => {
  let component: ParentContentChildExampleComponent;
  let fixture: ComponentFixture<ParentContentChildExampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParentContentChildExampleComponent]
    });
    fixture = TestBed.createComponent(ParentContentChildExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
