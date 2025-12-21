import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Contect } from './contect';

describe('Contect', () => {
  let component: Contect;
  let fixture: ComponentFixture<Contect>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Contect]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Contect);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
