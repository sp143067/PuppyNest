import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersBlogComponent } from './customers-blog.component';

describe('CustomersBlogComponent', () => {
  let component: CustomersBlogComponent;
  let fixture: ComponentFixture<CustomersBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomersBlogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomersBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
