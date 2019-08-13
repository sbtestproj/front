import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {ModalData} from '../Models/Model_Data';
import { AddNewParamDataModel } from '../Models/AddNewParamDataModel';


@Component({
  selector: 'app-addparamwindow',
  templateUrl: './addparamwindow.component.html',
  styleUrls: ['./addparamwindow.component.css']
})
export class AddparamwindowComponent implements OnInit {

  outname;
  constructor( public dialogRef: MatDialogRef <AddparamwindowComponent>,
               @Inject(MAT_DIALOG_DATA) public data: AddNewParamDataModel) {}

  onNoClick(): void {this.dialogRef.close(); }
  ngOnInit() {
  }

}
