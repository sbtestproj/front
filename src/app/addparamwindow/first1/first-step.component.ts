import { Component, OnInit } from '@angular/core';

import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {moduleVersionsEntity} from '../../Models/Entities/moduleVersions';
import {moduleEntity} from '../../Models/Entities/moduleEntity';
import {ServiceHttpService} from '../../Service/service-http.service';
import {HttpClient} from '@angular/common/http';
import {AddparamwindowComponent} from '../addparamwindow.component';

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
              public service: ServiceHttpService, public paramWindow: AddparamwindowComponent) {}
              ngOnInit() {
    this.service.getModules();
    this.firstStepFormGroup = this.formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.firstStepFormGroup.statusChanges.subscribe(st => {this.paramWindow.firstFormGroup = this.firstStepFormGroup; });
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

