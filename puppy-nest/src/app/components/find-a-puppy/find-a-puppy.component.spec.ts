import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindAPuppyComponent } from './find-a-puppy.component';

describe('FindAPuppyComponent', () => {
  let component: FindAPuppyComponent;
  let fixture: ComponentFixture<FindAPuppyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindAPuppyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindAPuppyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
