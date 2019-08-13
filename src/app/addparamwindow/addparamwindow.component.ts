import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {ModalData} from '../Models/Model_Data';
import { AddNewParamDataModel } from '../Models/AddNewParamDataModel';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Config_item_out} from '../Models/config_item_out';

@Component({
  selector: 'app-addparamwindow',
  templateUrl: './addparamwindow.component.html',
  styleUrls: ['./addparamwindow.component.css']
})

export class AddparamwindowComponent implements OnInit {
  isLinear: boolean;
  description: string;
  configSourceName: string;
  configSourceType: string;
  configItemType: string;
  dataType: string;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;
  fifthFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.firstFormGroup = this.formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this.formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.thirdFormGroup = this.formBuilder.group({
      thirdCtrl: ['', Validators.required]
    });
    this.fourthFormGroup = this.formBuilder.group({
      fourthCtrl: ['', Validators.required]
    });
    this.fifthFormGroup = this.formBuilder.group({
      fifthCtrl: ['', Validators.required]
    });
  }

}


