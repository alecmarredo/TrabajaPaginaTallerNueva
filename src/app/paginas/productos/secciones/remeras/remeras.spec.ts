import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Remeras } from './remeras';

describe('Remeras', () => {
  let component: Remeras;
  let fixture: ComponentFixture<Remeras>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Remeras],
    }).compileComponents();

    fixture = TestBed.createComponent(Remeras);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
