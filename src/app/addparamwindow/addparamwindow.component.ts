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
  isLinear: boolean;
  modul: moduleEntity[];
  moduleVersions: Modules[] = [{name: 'blue', versionNumber: 56}];
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;
  fifthFormGroup: FormGroup;
  filteredOptions: Observable<moduleEntity[]>;
  myControl = new FormControl();
  constructor(private formBuilder: FormBuilder, public httpClient: HttpClient, public ResultMessages: MessagesService,  public service: ServiceHttpService) {
  }


  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(name => name ? this._filter(name) : this.service.data1.slice())
      );
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

  saveData(a, b, c, d, e, f, g) {
      console.log(a + ' ' + b + ' ' + ' ' + c + ' ' + d + ' ' + e + ' ' + f + ' ' + g);
  }

  displayFn(user?: moduleEntity): string | undefined {
    return user ? user.module_name : undefined;
  }
  displayFn2(user?: moduleVersionsEntity): string | undefined {
    return user ? user.version_number : undefined;
  }

  private _filter(name: string): moduleEntity[] {
    const filterValue = name.toLowerCase();

    return this.service.data1.filter(option => option.module_name.toLowerCase().indexOf(filterValue) === 0);
  }

  // getModulss() {
  //   this.service = new ServiceHttpService(this.httpClient, this.ResultMessages);
  //   this.modul = this.service.getModules();
  //   // console.log(this.modul[0] + this.modul[1]);
  //   // this.moduleVersions.push();
  // }
}


