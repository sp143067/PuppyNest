import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnowYourPuppyComponent } from './know-your-puppy.component';

describe('KnowYourPuppyComponent', () => {
  let component: KnowYourPuppyComponent;
  let fixture: ComponentFixture<KnowYourPuppyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KnowYourPuppyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KnowYourPuppyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
