import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuppySitterComponent } from './puppy-sitter.component';

describe('PuppySitterComponent', () => {
  let component: PuppySitterComponent;
  let fixture: ComponentFixture<PuppySitterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PuppySitterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PuppySitterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
