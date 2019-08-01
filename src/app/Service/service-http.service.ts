import { Injectable } from '@angular/core';
import { FakeData} from '../FakeData';

import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { HttpData } from '../OutData';


@Injectable({
  providedIn: 'root'
})
export class ServiceHttpService {

  constructor(public httpClient: HttpClient) { }
// variables
  outData: any;

  // ******** fake functions ***********
  fakeData: HttpData[] = [];
  // *******************************
  // ********* Read ****************


  stringUrl: string;
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
}

