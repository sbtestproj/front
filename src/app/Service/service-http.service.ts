import { Injectable } from '@angular/core';
import { FakeData} from '../FakeData';

import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { HttpData } from '../OutData';


@Injectable({
  providedIn: 'root'
})
export class ServiceHttpService {

  constructor(public httpClient: HttpClient) { }
// variables
  outData: any;

  headers = new HttpHeaders()
    .set ('Access-Control-Allow-Origin', '*');
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
  getFakeData(): HttpData[] {
    this.fakeData = FakeData;
    return this.fakeData;
  }
  getDataTable( stringdata: string ): Observable <HttpData[]> {

    this.stringUrl = 'http://localhost:8080/hiberProject/test?name=';
    this.stringUrl = this.stringUrl + stringdata;
  //  this.stringUrl = 'http://localhost:8080/hiberProject/test?name=a';
    console.log('stringUrl: ' + this.stringUrl);
    this.httpClient.get(this.stringUrl)
      .subscribe((data: any) => {console.log(  data );  console.log('verif : ' + data[0].verif); this.outData = data; });
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
      ).subscribe (
      res => {
        console.log(res);
      },
      err => {
        console.log('Error occurred', err); } );


  }


}

