import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedecinCardComponent } from './medecin-card.component';

describe('MedecinCardComponent', () => {
  let component: MedecinCardComponent;
  let fixture: ComponentFixture<MedecinCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedecinCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedecinCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
