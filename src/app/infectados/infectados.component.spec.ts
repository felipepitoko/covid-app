import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfectadosComponent } from './infectados.component';

describe('InfectadosComponent', () => {
  let component: InfectadosComponent;
  let fixture: ComponentFixture<InfectadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfectadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfectadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
