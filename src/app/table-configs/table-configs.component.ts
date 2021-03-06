import {Component, OnInit} from '@angular/core';
import { ServiceHttpService} from '../Service/service-http.service';
import {HttpData} from '../OutData';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { MessagesService} from '../Service/messages.service';

/*                  meterial                         */
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import {DialogtestComponent} from '../dialogtest/dialogtest.component';
import {Parameter} from '../Models/parameter';
// *******************************************************



@Component({
  selector: 'app-table-configs',
  templateUrl: './table-configs.component.html',
  styleUrls: ['./table-configs.component.css']
})

export class TableConfigsComponent implements OnInit {
  title = 'front';
  confItemName: string;
  confItemType: string;
  defValue: string;
  des: string;
  deviceName: string;
  sourceName: string;
  sourceType: string;

 // constructor( private  ServiceHttp: ServiceHttpService) { }
  constructor(public ResultMessages: MessagesService, private  ServiceHttp: ServiceHttpService,
              public httpclient: HttpClient,
              /* for material */
              public  dialog: MatDialog, public service: ServiceHttpService) { }

// ********** variables *************
  // HttpData: IniArtibutesType[];
  // httpData: Observable<HttpData[]>;
  stringUrl: string;
  httpData: any;
  temp: any;
  p = 1; // for pagination
   ResultLenght: number;
  stringdata = ''; // using it in our service for add get param
// **********************************

// ********** functions *************
   // ****  Dialog Functions ****
  name: any;
  color ;
 // openDialog(): void {
  openDialog( mytemp) {
    const dialogRef = this.dialog.open(DialogtestComponent, {
      width: '1000px',
      height: '500px',
     // this.name = 'test';
      data: {location: mytemp[0], filename: mytemp[1], section: mytemp[2], parameter: mytemp[3]}
    });

    dialogRef.afterClosed().subscribe(res => {
      this.color = res;
    });
  }
  // *************************************
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
  // getFakeData(): void {
  //
  //   this.httpData = this.ServiceHttp.getDataTable(this.stringdata);
  //  //   this.ServiceHttp.getDataTable(this.stringdata).subscribe((data: any) => (this.httpData = data));
  // }
  // ***********************************

// it woks insted of service

       // this.ResultLenght = (data).length; console.log('lenght res: ' + this.ResultLenght); }) ;

    // return this.outData;

  ngOnInit() {

   // this.ServiceHttp.getDataTable(this.stringdata);

  }

}
