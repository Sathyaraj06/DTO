import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { baseUrl } from 'src/assets/domain.json';


@Injectable({
  providedIn: 'root'
})
export class HttpService {
  jsonData:any;
  tempData: any[] = [];
  constructor(private http: HttpClient) {}


  getData(){
      return this.http.get(baseUrl).pipe(
        map(x=>{
          this.jsonData = JSON.parse(JSON.stringify(x));
          let obj:[] = JSON.parse(JSON.stringify(x)).datas;
          obj.map((each:any, i)=>{
            this.tempData[i] = [];
            Object.keys(each).map(x=>{
              if(typeof each[x] != 'object'){
                this.tempData[i].push({[x]:each[x]})
              }
              else{
                each[x].map((prop:any)=>{
                  if(typeof prop.value != 'object'){
                  this.tempData[i].push({[prop.label]: prop.value})
                  }
                  else{
                      // this.tempData[i].push({[prop.label]: prop.value.Value + " " + prop.value.Unit.Symbol})
                      this.tempData[i].push({[prop.label]: prop.value.Value})
                  }
                })
              }
            })
          })
          return { json:this.jsonData, data:this.tempData}
        }),
          catchError(err => {
              return throwError(err);
          }));;
  }
  setData(obj:any){
    return this.http.post(baseUrl, obj).pipe(
      catchError(err => {
          return throwError(err);
      }));;
  }

}
