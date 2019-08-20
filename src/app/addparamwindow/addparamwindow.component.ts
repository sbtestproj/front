import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {ModalData} from '../Models/Model_Data';
import { AddNewParamDataModel } from '../Models/AddNewParamDataModel';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Config_item_out} from '../Models/config_item_out';
import {User} from '../just-test/just-test.component';
import {map, startWith} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {moduleVersionsEntity} from '../Models/moduleVersionsEntity';
import {moduleEntity} from '../Models/moduleEntity';
import {ServiceHttpService} from '../Service/service-http.service';
import {HttpClient} from '@angular/common/http';
import {MessagesService} from '../Service/messages.service';

export interface Modules {
  name: string;
  versionNumber: any;
}

@Component({
  selector: 'app-addparamwindow',
  templateUrl: './addparamwindow.component.html',
  styleUrls: ['./addparamwindow.component.css']
})

export class AddparamwindowComponent implements OnInit {

  inn: moduleEntity;
  inn2: string;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;
  constructor(private formBuilder: FormBuilder, public httpClient: HttpClient, public ResultMessages: MessagesService,
              public service: ServiceHttpService) {
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
  }

  saveData(a, b, c, d, e, f, g) {
      console.log(a + ' ' + b + ' ' + ' ' + c + ' ' + d + ' ' + e + ' ' + f + ' ' + g);
  }
  show() {
    console.log('inn:' + this.inn.module_name + '*******' + 'inn2:' + this.inn2);
  }
  displayFn(user?: moduleEntity): string | undefined {
    return user ? (user.module_name) : undefined;
  }

  displayFn2(user?: moduleVersionsEntity): string | undefined {
    return user ? user.version_number : undefined;
  }
}


