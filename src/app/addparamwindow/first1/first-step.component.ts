import { Component, OnInit } from '@angular/core';

import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {moduleVersionsEntity} from '../../Models/Entities/moduleVersions';
import {moduleEntity} from '../../Models/Entities/moduleEntity';
import {ServiceHttpService} from '../../Service/service-http.service';
import {HttpClient} from '@angular/common/http';
import {AddparamwindowComponent} from '../addparamwindow.component';
import {ParamService} from '../Service/param.service';

@Component({
  selector: 'app-first-step',
  templateUrl: './first-step.component.html',
  styleUrls: ['./first-step.component.css']
})
export class FirstStepComponent implements OnInit {
  inn: string;
  inn2: string;
  firstStepFormGroup: FormGroup;
  constructor(private formBuilder: FormBuilder, public httpClient: HttpClient,
              public service: ServiceHttpService, public paramWindow: AddparamwindowComponent,
              public paramService: ParamService) {}
              ngOnInit() {
    this.service.getModules();
    this.firstStepFormGroup = this.formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.firstStepFormGroup.statusChanges.subscribe(st => {this.paramWindow.firstFormGroup = this.firstStepFormGroup; });
  }
  show(moduleName, moduleVersion) {
    this.inn = moduleName;
    this.inn2 = moduleVersion;
    console.log('moduleName:' + this.inn + '*******' + 'moduleVersion:' + this.inn2);
    console.log(' a : ' + moduleName + 'b:' + moduleVersion);
    this.paramService.FullData.moduleNameVersion.module_name = moduleName;
    this.paramService.FullData.moduleNameVersion.version_number = moduleVersion;
    console.log(' servName : ' + this.paramService.FullData.moduleNameVersion.module_name +
      'servVers:' + this.paramService.FullData.moduleNameVersion.version_number);
  }
  displayFn(user?: moduleEntity): string | undefined {
    return user ? (user.module_name) : undefined;
  }

  displayFn2(user?: moduleVersionsEntity): string | undefined {
    return user ? user.version_number : undefined;
  }
}

