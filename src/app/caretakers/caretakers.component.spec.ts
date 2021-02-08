import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaretakersComponent } from './caretakers.component';

describe('CaretakersComponent', () => {
  let component: CaretakersComponent;
  let fixture: ComponentFixture<CaretakersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaretakersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaretakersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
