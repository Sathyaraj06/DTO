import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationBarCenterComponent } from './notification-bar-center.component';

describe('NotificationBarComponent', () => {
  let component: NotificationBarCenterComponent;
  let fixture: ComponentFixture<NotificationBarCenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificationBarCenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationBarCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
