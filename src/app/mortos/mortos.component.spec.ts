import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MortosComponent } from './mortos.component';

describe('MortosComponent', () => {
  let component: MortosComponent;
  let fixture: ComponentFixture<MortosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MortosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MortosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
