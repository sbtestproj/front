import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {ModalData} from '../Models/Model_Data';


@Component({
  selector: 'app-dialogtest',
  templateUrl: './dialogtest.component.html',
  styleUrls: ['./dialogtest.component.css']
})
export class DialogtestComponent implements OnInit {
outname;
  constructor( public dialogRef: MatDialogRef <DialogtestComponent>,
               @Inject(MAT_DIALOG_DATA) public data: ModalData) {}

               onNoClick(): void {this.dialogRef.close(); }

  ngOnInit() {
  }

}
