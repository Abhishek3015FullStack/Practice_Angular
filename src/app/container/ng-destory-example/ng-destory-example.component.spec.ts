import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgDestoryExampleComponent } from './ng-destory-example.component';

describe('NgDestoryExampleComponent', () => {
  let component: NgDestoryExampleComponent;
  let fixture: ComponentFixture<NgDestoryExampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgDestoryExampleComponent]
    });
    fixture = TestBed.createComponent(NgDestoryExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
