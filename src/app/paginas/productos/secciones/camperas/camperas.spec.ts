import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Camperas } from './camperas';

describe('Camperas', () => {
  let component: Camperas;
  let fixture: ComponentFixture<Camperas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Camperas],
    }).compileComponents();

    fixture = TestBed.createComponent(Camperas);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
