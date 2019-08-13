import { Component, OnInit } from '@angular/core';
import { ServiceHttpService } from '../Service/service-http.service';


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

  startPage = 'Adding new params'
  color ;
  // openDialog(): void {
  openDialog() {
    const dialogRef = this.dialog.open(AddparamwindowComponent, {
      width: '1000px',
      height: '500px',
      // this.name = 'test';
      data: {simplestring: this.startPage }
    });

    dialogRef.afterClosed().subscribe(res => {
      this.color = res;
    });
  }
  // *************************************
  ngOnInit() {
  }

}
