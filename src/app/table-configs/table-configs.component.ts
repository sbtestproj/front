import {Component, OnInit} from '@angular/core';
import { ServiceHttpService} from '../Service/service-http.service';
import {HttpData} from '../OutData';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-table-configs',
  templateUrl: './table-configs.component.html',
  styleUrls: ['./table-configs.component.css']
})

export class TableConfigsComponent implements OnInit {
  title = 'front';
  searchTerm: string;
  searchTerm2: string;

 // constructor( private  ServiceHttp: ServiceHttpService) { }
  constructor( private  ServiceHttp: ServiceHttpService, public httpclient: HttpClient) { }

// ********** variables *************
  // HttpData: IniArtibutesType[];
  // httpData: Observable<HttpData[]>;
  stringUrl: string;
  httpData: any;
  temp: any;
  p = 1; // for pagination

  stringdata = ''; // using it in our service for add get param
// **********************************

// ********** functions *************

  onEveryClick(event: any) {
   this.stringdata = event.target.value;
  }

  // ********************************
  myCondition(test: any): boolean {
    this.temp = test.id;
    console.log('filter: ' + this.temp );
    if (this.temp === 3) { console.log('log: true'); return true; }
    console.log('log false');
    return false;
  }
  // ***********************************
  showLog(): void {
    console.log('Message');
  }
  getFakeData(): void {

    this.httpData = this.ServiceHttp.getDataTable(this.stringdata);
   //   this.ServiceHttp.getDataTable(this.stringdata).subscribe((data: any) => (this.httpData = data));
  }
  // ***********************************
  onkeyup(event: any) {
     console.log(event.target.value);
  }
// **********************************
// it woks insted of service
  getDataTableNew(): void {
    this.stringUrl = 'http://localhost:8080/hiberProject/test?name=';
    this.stringUrl = this.stringUrl + this.stringdata;
   
    console.log('stringUrl: ' + this.stringUrl);
    this.httpclient.get(this.stringUrl)
      .subscribe((data: any) => {console.log(  data );  console.log('verif : ' + data[0].verif); this.httpData = data; });
   // return this.outData;
  }



  ngOnInit() {
   // this.ServiceHttp.getDataTable(this.stringdata);

  }



}
