import { Component, Inject, OnInit, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'status-notification-center-bar',
  templateUrl: './notification-bar-center.component.html',
  styleUrls: ['./notification-bar-center.component.scss']
})
export class NotificationBarCenterComponent implements OnInit {

  message: string = "";
  bgColor: string = "";

  constructor(@Inject(MAT_DIALOG_DATA) private mat_dialog_data:any,public dialogRef: MatDialogRef<any>) { }

  ngOnInit(): void {
    this.message = this.mat_dialog_data.message;
  }

  onSubmit(status:any) {
    this.dialogRef.close(status);
  }

}
