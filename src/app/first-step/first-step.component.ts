import { Component, OnInit } from '@angular/core';
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

@Component({
  selector: 'app-first-step',
  templateUrl: './first-step.component.html',
  styleUrls: ['./first-step.component.css']
})
export class FirstStepComponent implements OnInit {
  inn: string;
  inn2: string;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  myControl = new FormControl();
  myControl2 = new FormControl();
  constructor(private formBuilder: FormBuilder, public httpClient: HttpClient,
              public ResultMessages: MessagesService,  public service: ServiceHttpService) {}
              ngOnInit() {
    this.firstFormGroup = this.formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this.formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }
  show(a, b) {
    this.inn = a;
    this.inn2 = b;
    console.log('inn:' + this.inn + '*******' + 'inn2:' + this.inn2);
    console.log(' a : ' + a + 'b:' + b);
  }
  displayFn(user?: moduleEntity): string | undefined {
    return user ? (user.module_name) : undefined;
  }

  displayFn2(user?: moduleVersionsEntity): string | undefined {
    return user ? user.version_number : undefined;
  }
}

