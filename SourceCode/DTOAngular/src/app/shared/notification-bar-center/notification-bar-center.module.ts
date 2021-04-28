import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationBarCenterComponent } from './notification-bar-center.component';

@NgModule({
  declarations: [NotificationBarCenterComponent],
  imports: [
    CommonModule
  ],
  exports:[NotificationBarCenterComponent]
})
export class NotificationBarCenterModule { }
 