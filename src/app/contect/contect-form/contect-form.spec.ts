import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContectForm } from './contect-form';

describe('ContectForm', () => {
  let component: ContectForm;
  let fixture: ComponentFixture<ContectForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContectForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContectForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
