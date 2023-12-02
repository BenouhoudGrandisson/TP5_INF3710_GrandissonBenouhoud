import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowMedecinsComponent } from './show-medecins.component';

describe('ShowMedecinsComponent', () => {
  let component: ShowMedecinsComponent;
  let fixture: ComponentFixture<ShowMedecinsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowMedecinsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowMedecinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
