import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {map, startWith} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {moduleVersionsEntity} from '../Models/moduleVersionsEntity';
import {moduleEntity} from '../Models/moduleEntity';
import {ServiceHttpService} from '../Service/service-http.service';
import {HttpClient} from '@angular/common/http';
import {MessagesService} from '../Service/messages.service';
import { ConfigItemType} from '../Models/Entities/ConfigItemType';
import { InterfaceToSave} from './InterfaceToSave';

export interface Modules {
  name: string;
  versionNumber: any;
}

export interface User {
  name: string;
}


@Component({
  selector: 'app-addparamwindow',
  templateUrl: './addparamwindow.component.html',
  styleUrls: ['./addparamwindow.component.css']
})

export class AddparamwindowComponent implements OnInit {

  // for messaging here is another func recieve
  fromchild;
  testate: InterfaceToSave = {
    configitemname: ''
  };


 // ******************************************


    isLinear: boolean;

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;
  fifthFormGroup: FormGroup;
  filteredOptions: Observable<moduleEntity[]>;
  myControl = new FormControl();
  constructor(private formBuilder: FormBuilder, public httpClient: HttpClient, public ResultMessages: MessagesService,  public service: ServiceHttpService) {
  }



  // ********************************************************** functions ****************************************************
  // recieving data from child

  receiveFromChild(event) {
   // console.log('event: ' + event.configitemname);
    this.testate = event;
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



  displayFn(user?: moduleEntity): string | undefined {
    return user ? user.module_name : undefined;
  }
  displayFn2(user?: moduleVersionsEntity): string | undefined {
    return user ? user.version_number : undefined;
  }




}


