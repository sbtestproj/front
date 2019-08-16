import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { HttpData } from '../OutData';
import {moduleVersionsEntity} from '../Models/moduleVersionsEntity';
import {moduleEntity} from '../Models/moduleEntity';
import {MessagesService} from './messages.service';



@Injectable({
  providedIn: 'root'
})
export class ServiceHttpService {

  constructor(public httpClient: HttpClient, public ResultMessages: MessagesService) {
  }

// variables
  outData: any;
  httpData: any;
  data1: moduleEntity[];
  moduleVersions: moduleVersionsEntity[];

  headers = new HttpHeaders()
    .set('Access-Control-Allow-Origin', '*');
  // .set('Authorization', 'Basic YW5ndWxhcjphbmd1bGFy')
  // .set('Content-Type', 'application/x-www-form-urlencoded');

  httpOptions = {
    headers: this.headers,
    //  params: _params,
    //  withCredentials: true
  };

  // ******** fake functions ***********
  fakeData: HttpData[] = [];
  // *******************************
  // ********* Read ****************


  stringUrl: string;
  postUrl: string;

  getDataTable(stringdata: string): Observable<HttpData[]> {

    this.stringUrl = 'http://localhost:8080/hiberProject/test?name=';
    this.stringUrl = this.stringUrl + stringdata;
    //  this.stringUrl = 'http://localhost:8080/hiberProject/test?name=a';
    console.log('stringUrl: ' + this.stringUrl);
    this.httpClient.get(this.stringUrl)
      .subscribe((data: any) => {
        console.log(data);
        console.log('verif : ' + data[0].verif);
        this.outData = data;
      });
    return this.outData;
  }


  postData(data: any) {
    console.log('postrequest');
    // const headers = new Headers({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'});
    // const options = new RequestOptions({ headers: headers });
    this.postUrl = 'http://localhost:8080/hiberProject/test';
    //  const body = {data};
    this.httpClient.post(this.postUrl, 'text',
      //  { headers:{'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' } }
    ).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log('Error occurred', err);
      });


  }


  getModules(): void {
    this.stringUrl = 'http://192.168.137.13:8080/hiberProject/modules';
    // this.stringUrl = this.stringUrl;
    console.log('stringUrl = ' + this.stringUrl);
    this.httpClient.get(this.stringUrl)
      .subscribe((data: moduleEntity[]) => {
        this.data1 = data;
        console.log(data + ' lenght: ' + (data).length);
        // console.log('verif : ' + data[0]);
        if ((data).length === 0) {
          this.ResultMessages.add(' SearchResult: 0');
          this.data1 = null;
        } else {
          this.ResultMessages.add('SearchResult :' + (data).length);
        }
      });
  }

  getModuleVersionsByModuleId(stringdata: string): void {
    this.stringUrl = 'http://192.168.137.13:8080/hiberProject/module_versions?modules_id=';
    this.stringUrl = this.stringUrl + stringdata;

    console.log('stringUrl: ' + this.stringUrl);
    this.httpClient.get(this.stringUrl)
      .subscribe((data: moduleVersionsEntity[]) => {
        console.log(data + ' lenght: ' + (data).length);
        this.moduleVersions = data; /* console.log('verif : ' + data[0].verif); */
        if ((data).length === 0) {
          this.ResultMessages.add(' SearchResult: 0');
          this.httpData = [];
        } else {
          this.ResultMessages.add('SearchResult :' + (data).length);
        }
      });
  }

  getDataTableNew(stringdata: string): void {

    this.stringUrl = 'http://192.168.137.13:8080/hiberProject/test?name=';
    this.stringUrl = this.stringUrl + stringdata;

    console.log('stringUrl: ' + this.stringUrl);
    this.httpClient.get(this.stringUrl)
      .subscribe((data: any) => {
        console.log(data + ' lenght: ' + (data).length);
        this.httpData = data; /* console.log('verif : ' + data[0].verif); */
        if ((data).length === 0) {
          this.ResultMessages.add(' SearchResult: 0');
          this.httpData = [];
        } else {
          this.ResultMessages.add('SearchResult :' + (data).length);
        }
      });
  }
}

