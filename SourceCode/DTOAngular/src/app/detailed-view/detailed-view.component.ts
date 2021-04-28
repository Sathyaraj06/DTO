import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HttpService } from '../service/http.service';
import { NotificationBarCenterComponent } from '../shared/notification-bar-center/notification-bar-center.component';
import { NotificationBarComponent } from '../shared/notification-bar/notification-bar.component';

@Component({
  selector: 'detailed-view',
  templateUrl: './detailed-view.component.html',
  styleUrls: ['./detailed-view.component.scss']
})
export class DetailedViewComponent implements OnInit {

  @ViewChild('tabs') private tabs!: ElementRef;
  jsonData: any;
  tableData: any[] = [];
  tempData: any[] = [];
  count: number = 0;
  keys: any[] = [];
  index: number = 0;

  viewData: any;
  headers: any[] = [];

  constructor(private httpservice: HttpService, public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.httpservice.getData().subscribe(x => {
      this.jsonData = x.json;
      this.tableData = x.data.map(x => Object.assign({}, ...x));
      this.headers = this.tableData.map(x => x.samplingTime);
      this.keys = Object.keys(this.tableData[0]);
      this.showView(this.tableData[0]['Project Name']);
    })
  }

  showView(proj: string) {
    this.viewData = this.tableData.find(x => x['Project Name'] == proj);
    this.keys = Object.keys(this.viewData);
    this.count = Object.keys(this.viewData).length;
    const index = this.keys.indexOf('samplingTime');
    if (index > -1) {
      this.keys.splice(index, 1);
    }
  }

  setActive(target: any, index: any) {
    this.index = index;
    let tabs = [...this.tabs.nativeElement.querySelectorAll('div')];
    tabs.map(x => x.classList.remove('active'));
    target.classList.add('active');
  }

  saveForm() {
    const dialogRef = this.dialog.open(NotificationBarCenterComponent, {
      data: { message: 'Are you sure you want to update the data?' }
    }).afterClosed().subscribe((response: boolean) => {
      if (response) {
        this.jsonData['datas'][this.index].properties = this.jsonData['datas'][this.index].properties.map((x: any) => {
          if (typeof x.value != 'object') {
            this.keys.map((key: any) => {
              if (key == x.label) {
                x.value = this.viewData[key];
              }
            })
          }
          else {
            this.keys.map((key: any) => {
              if (key == x.label) {
                x.value.Value = this.viewData[key];
              }
            })
          }
          return x;
        });

        this.httpservice.setData(this.jsonData).subscribe(x => {
          let notifyDialog = this.dialog.open(NotificationBarComponent, {
            data : {message : "Data updated successfully!", status: true }
          });
          setTimeout(() => {
            notifyDialog.close();
            }, 1000);  
        })
      }
    });
}
}
