import { Injectable } from '@angular/core';
import { FakeData} from './FakeData';

import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { HttpData } from './OutData';


@Injectable({
  providedIn: 'root'
})
export class ServiceHttpService {
// variables
  outData: any;

  // ******** fake functions ***********
  fakeData: HttpData[] = [];
  getFakeData(): HttpData[] {
    this.fakeData = FakeData;
    return this.fakeData;
  }
  // *******************************
  // ********* Read ****************



  getDataTable(): Observable <HttpData[]> {
    this.httpClient.get('http://localhost:8080/hiberProject/test')
      .subscribe((data: HttpData[]) => {console.log(  data );  console.log('verif : ' + data[0].verif); this.outData = data; });
    return this.outData;
  }

  constructor(public httpClient: HttpClient) { }
}

