import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoWaysNotificationComponent } from './two-ways-notification.component';

describe('TwoWaysNotificationComponent', () => {
  let component: TwoWaysNotificationComponent;
  let fixture: ComponentFixture<TwoWaysNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwoWaysNotificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoWaysNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
