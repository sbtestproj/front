import { Component, OnInit } from '@angular/core';
import { ServiceHttpService } from '../Service/service-http.service';

import { ConfigItemOut } from '../Models/config_item_out';
import { tempConfigItems} from '../TempFakeData';


/*                  meterial                         */
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AddparamwindowComponent} from '../addparamwindow/addparamwindow.component';
import { TableConfigsComponent } from '../table-configs/table-configs.component';
// *******************************************************

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  constructor(public  dialog: MatDialog , public httpService: ServiceHttpService ) {}
  // ****  Dialog Functions ****

  MyConfigItem: ConfigItemOut[] ;

   TestConfigItems = tempConfigItems;


  startPage = 'Adding new params';
  startPage2 = 'Adding new module';
  color ;

  // ************* functions **************



  // openDialog(): void {
  openDialog() {
    const dialogRef = this.dialog.open(AddparamwindowComponent, {
      width: '1000px',
      height: '500px',
      // this.name = 'test';
      // data: {simplestring: this.startPage }
    });

    dialogRef.afterClosed().subscribe(res => {
      this.color = res;
    });
  }
  // *************************************
  ngOnInit() {
    console.log('name :'  + this.TestConfigItems[0].configItemName);
  }

}
