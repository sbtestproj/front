import {Component, OnInit, PipeTransform} from '@angular/core';
import { ServiceHttpService} from '../service-http.service';
import { HttpData} from '../OutData';
import {map, startWith} from 'rxjs/operators';
import {DecimalPipe} from '@angular/common';
import {filter} from 'minimatch';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';



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
  constructor( private  ServiceHttp: ServiceHttpService) { }

// ********** variables *************
  // HttpData: IniArtibutesType[];
  // httpData: Observable<HttpData[]>;

  httpData: any;
  temp: any;
  p = 1; // for pagination

// **********************************

// ********** functions *************

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
    this.httpData = this.ServiceHttp.getDataTable();
    /*  this.ServiceHttp.getDataTable().subscribe((data: HttpData[]) => (this.httpData = data));*/
  }
  // ***********************************
  onkeyup(event: any) {
     console.log(event.target.value);
  }
// **********************************




  ngOnInit() {
    this.ServiceHttp.getDataTable();

  }


}
