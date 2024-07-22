import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgDestroyChildComponent } from './ng-destroy-child.component';

describe('NgDestroyChildComponent', () => {
  let component: NgDestroyChildComponent;
  let fixture: ComponentFixture<NgDestroyChildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgDestroyChildComponent]
    });
    fixture = TestBed.createComponent(NgDestroyChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
