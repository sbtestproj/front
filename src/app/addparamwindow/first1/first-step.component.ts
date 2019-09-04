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
  // ControlVersions = this.firstStepFormGroup.get('firstCtrl2');

  constructor(private formBuilder: FormBuilder, public httpClient: HttpClient,
              public service: ServiceHttpService, public paramWindow: AddparamwindowComponent, public paramservice: ParamService) {}


  show(a, b) {
    this.inn = a;
    this.inn2 = b;
    console.log('inn:' + this.inn + '*******' + 'inn2:' + this.inn2);
    console.log(' a : ' + a + 'b:' + b);
  }
  // ************************************ Getting Modules from Control 1 ************************************************************
  controlModulechanged() {
    this.paramservice.FullData.modules.module_name = this.firstStepFormGroup.get('firstCtrl').value;
   // console.log('ctrl1: ' + this.firstStepFormGroup.get('firstCtrl').value);
    // const ControlVersions = this.firstStepFormGroup.get('firstCtrl2');
    // console.log('next: ' + ControlVersions.value)
    // обнуляем
    this.service.latestVersion = '';
    this.service.moduleVersions = null;
  }
  controlModuleclick(modulename, id) {
    this.paramservice.FullData.modules.module_name = modulename;
   // console.log('moduls name: ' + modulename);
   // console.log('id: ' + id);
    this.service.getModuleVersionsByModuleId(id.toString());
  }
// *************************************************************************************************************************************
// ************************************ Versions Module Changed ************************************************************************
  controlVersionsModulechanged() {
   // console.log('version module changed');
   // console.log('version: ' + this.firstStepFormGroup.get('firstCtrl2').value);
    this.paramservice.FullData.moduleversions.version_number = this.firstStepFormGroup.get('firstCtrl2').value;
  }
  controlVersionsModuleclick(vernum) {
   this.paramservice.FullData.moduleversions.version_number = vernum;
  // console.log('vernum');
  }

  // ***********************************************************************************************************************************



  displayFn(user?: moduleEntity): string | undefined {
    return user ? (user.module_name) : undefined;
  }

  displayFn2(user?: moduleVersionsEntity): string | undefined {
    return user ? user.version_number : undefined;
  }


  ngOnInit() {
    this.service.getModules();
    this.firstStepFormGroup = this.formBuilder.group({
      firstCtrl: ['', Validators.required],
      firstCtrl2: ['', Validators.required],
    });
    this.firstStepFormGroup.statusChanges.subscribe(st => {this.paramWindow.firstFormGroup = this.firstStepFormGroup; });
    // this.firstStepFormGroup.get('firstCtrl').valueChanges.subscribe(value => {console.log('val ' + value); } );

    }

}

