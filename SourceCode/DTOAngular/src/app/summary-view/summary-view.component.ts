import { Component, OnInit } from '@angular/core';
import { HttpService } from '../service/http.service';

@Component({
  selector: 'summary-view',
  templateUrl: './summary-view.component.html',
  styleUrls: ['./summary-view.component.scss']
})
export class SummaryViewComponent implements OnInit {
  tableData:any[] = [];
  tempData: any[] = [];
  count: number = 0;
  keys: any[] =[];

  constructor(private httpservice:HttpService) { }

  ngOnInit(): void {
    this.httpservice.getData().subscribe(x=>{
      this.tableData = x.data.map(x=> Object.assign({}, ...x));     
      this.count = Object.keys(this.tableData).length;
      this.keys = Object.keys(this.tableData[0]);
    })

  }
}
