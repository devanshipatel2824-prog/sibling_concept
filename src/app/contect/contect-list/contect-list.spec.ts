import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContectList } from './contect-list';

describe('ContectList', () => {
  let component: ContectList;
  let fixture: ComponentFixture<ContectList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContectList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContectList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
