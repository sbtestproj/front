import { Injectable } from '@angular/core';

import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { HttpData } from '../OutData';
import {tempConfigItems} from '../TempFakeData';

import {ConfigItemOut} from '../Models/config_item_out';
import {catchError, tap} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ServiceHttpService {

  constructor(public httpClient: HttpClient) { }
// variables
  outData: any;
  configtemp = tempConfigItems;

  headers = new HttpHeaders()
    .set ('Access-Control-Allow-Origin', '*');
   // .set('Authorization', 'Basic YW5ndWxhcjphbmd1bGFy')
   // .set('Content-Type', 'application/x-www-form-urlencoded');


  // ******** fake functions ***********
  fakeData: HttpData[] = [];
  // *******************************
  // ********* Read ****************


  stringUrl: string;
  postUrl: string;

  httpOptions = {
    headers: new HttpHeaders({ 'Access-Control-Allow-Origin': '*' }),
   // this.headers.set({'Access-Control-Allow-Origin': '*'})
  };




  getDataTable( stringdata: string ): Observable <HttpData[]> {

    this.stringUrl = 'http://localhost:8080/hiberProject/test?name=';
    this.stringUrl = this.stringUrl + stringdata;
  //  this.stringUrl = 'http://localhost:8080/hiberProject/test?name=a';
    console.log('stringUrl: ' + this.stringUrl);
    this.httpClient.get(this.stringUrl)
      .subscribe((data: any) => {console.log(  data );  console.log('verif : ' + data[0].verif); this.outData = data; });
    return this.outData;


  }




  postData( mydata)  {
    console.log('postrequest');
   // const headers = new Headers({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'});
   // const options = new RequestOptions({ headers: headers });

   // mydata.configItemName = 'testname';
    const body = {name: 'testname', next: 'next'};
   // console.log(mydata.configItemName);

    this.postUrl = 'http://localhost:8080/hiberProject/test';

    this.httpClient.post(this.postUrl, {name: 'test'} // , this.httpOptions
      //  ,headers: { ' Access-Control-Allow-Origin': '*'}}

      ).subscribe (
      res => {
        console.log(res);
      },
      err => {
        console.log('Error occurred', err); } );
  }

  /** POST: add a new hero to the server */
  addHero(hero: any): void {
    this.postUrl = 'http://localhost:8080/hiberProject/test';
    console.log('addhero')
    this.httpClient.post(this.postUrl, '' , this.httpOptions).subscribe(
      err => {console.log('MyError : ' + err);
      });
  }

  handleError(te: any) {console.log(te); } ;
  log(mes: any): void {  };
}

