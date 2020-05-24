import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeksPanelComponent } from './weeks-panel.component';

describe('WeeksPanelComponent', () => {
  let component: WeeksPanelComponent;
  let fixture: ComponentFixture<WeeksPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeeksPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeeksPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
