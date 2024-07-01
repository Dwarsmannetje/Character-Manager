import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatRollInputComponent } from './stat-roll-input.component';

describe('StatRollInputComponent', () => {
  let component: StatRollInputComponent;
  let fixture: ComponentFixture<StatRollInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatRollInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatRollInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
