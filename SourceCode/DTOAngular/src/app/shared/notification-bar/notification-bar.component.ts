import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'status-notification-bar',
  templateUrl: './notification-bar.component.html',
  styleUrls: ['./notification-bar.component.scss']
})
export class NotificationBarComponent implements OnInit {

  message: string="";
  bgColor: string="";
  constructor(@Inject(MAT_DIALOG_DATA) private mat_dialog_data:any,public dialogRef: MatDialogRef<any>) { }

  ngOnInit(): void {
    this.message = this.mat_dialog_data.message;

    this.bgColor = this.mat_dialog_data.status? '#4CAF50' : '#F44336';
  }

  onClose() {
    this.dialogRef.close();
  }

}
