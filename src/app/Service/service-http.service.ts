import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { HttpData } from '../OutData';
import {moduleVersionsEntity} from '../Models/Entities/moduleVersionsEntity';
import {moduleEntity_bak} from '../Models/moduleEntity_bak';
import {MessagesService} from './messages.service';
import { data_types } from '../Models/Entities/data_types';
import { ConfigItemType} from '../Models/Entities/ConfigItemType';
import { ConfigitemSections } from '../Models/Entities/configitemSections';

@Injectable({
  providedIn: 'root'
})
export class ServiceHttpService {

  constructor(public httpClient: HttpClient, public ResultMessages: MessagesService) {
  }

// *********************************************************************variables********************************************************
  ConfigItemsData;
  // baseUrl = 'http://127.0.0.1:8080/hiberProject/';
  baseUrl = 'http://127.0.0.1:8080/hiberProject/';

  latestVersion: string; // to get latest version of selected module

// ***************************************************************************************************************************************
  outData: any;
  httpData: any;
  ConfigItemSectionsData;

  data1: moduleEntity_bak[];
  httpmodules: string[];
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

  // ****************************************************************************funcions*******************************************************
  getConfigItems(param: string): void {
    //  this.stringUrl = 'http://192.168.137.13:8080/hiberProject/data_types'
    console.log('url = ' + this.baseUrl + 'config_items' +  param );
    this.httpClient.get(this.baseUrl + 'config_items' +  param)
      .subscribe((data: ConfigItemType[] ) => {
          this.ConfigItemsData = data;
          console.log(data + ' lenght: ' + (data).length
            + this.ConfigItemsData[0].config_item_name );
        }
      );
  }

  // *********
  getConfigItemsSections(): void {
    console.log('url = ' + this.baseUrl + 'config_item_sections');
    this.httpClient.get(this.baseUrl + 'config_item_sections')
      .subscribe((data: ConfigitemSections[]  ) => {
          this.ConfigItemSectionsData = data;
          console.log(data + ' lenght of Sections: ' + (data).length );
        }
      );
  }

  // ***********************copied 210819****************
  getModules(): void {
    this.stringUrl = this.baseUrl + 'modules';
    // this.stringUrl = 'http://localhost:8080/hiberProject/modules';
    // this.stringUrl = this.stringUrl;
    console.log('stringUrl = ' + this.stringUrl);
    this.httpClient.get(this.stringUrl)
      .subscribe((data: moduleEntity_bak[]) => {
        // for(let i = 0; i < data.length; i ++ ) {
        //    // this.httpmodules[i] = data[i].module_name;
        //    console.log(data[i].module_name);
        //  }

        this.data1 = data;
        console.log(data + ' lenght: ' + (data).length);
        // if ((data).length === 0) {
        //   this.ResultMessages.add(' SearchResult: 0');
        //   this.data1 = null;
        // } else {
        //   this.ResultMessages.add('SearchResult :' + (data).length);
        // }
      });
  }

  getModuleVersionsByModuleId(stringdata: string): void {
    // this.stringUrl = 'http://localhost:8080/hiberProject/module_versions?modules_id=';
    this.stringUrl = this.baseUrl + 'module_versions?modules_id=';
    this.stringUrl = this.stringUrl + stringdata;

    console.log('stringUrl: ' + this.stringUrl);
    this.httpClient.get(this.stringUrl)
      .subscribe((data: moduleVersionsEntity[]) => {
        console.log(' lenght: ' + (data).length);
        this.moduleVersions = data;
        this.latestVersion = data[data.length - 1].version_number;
      },
        error => {console.log('error in getVersions'); }

      );
  }
  // *****************************************************
  // *********************************************************************************************************************************************




  getDataTable(stringdata: string): Observable<HttpData[]> {

   // this.stringUrl = 'http://localhost:8080/hiberProject/test?name=';
    this.stringUrl = this.baseUrl + 'test?name=';
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
    this.postUrl = this.baseUrl + 'test';
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


  getDataByUrl(path: string): any {
  //  this.stringUrl = 'http://192.168.137.13:8080/hiberProject/data_types';
    this.stringUrl = this.baseUrl + 'data_types';
    path = this.baseUrl + path;
    console.log('url = ' + path);
    this.httpClient.get(path)
      .subscribe((data: any ) => {
         this.outData = data;
         console.log(data + ' lenght: ' + (data).length
       + this.outData[0].data_types_name );
      }
      );
  }









  getDataTableNew(stringdata: string): void {

    // this.stringUrl = 'http://192.168.137.13:8080/hiberProject/test?name=';
    this.stringUrl = this.baseUrl + 'test?name=';
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

