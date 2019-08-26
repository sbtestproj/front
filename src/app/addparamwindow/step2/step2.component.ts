import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { ServiceHttpService} from '../../Service/service-http.service';
import {data_types} from '../../Models/Entities/data_types';
import { ConfigItemType} from '../../Models/Entities/ConfigItemType';
import { AddparamwindowComponent } from '../addparamwindow.component';
import { Step4Component} from '../step4/step4.component';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { InterfaceToSave} from '../InterfaceToSave';

interface User {
  name: string;
}


@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.css']
})



export class Step2Component implements OnInit {
  constructor( public httpService: ServiceHttpService, private fb: FormBuilder,
               public paramWindow: AddparamwindowComponent,
               public step4: Step4Component,
  ) {
  }

  // event to parent
  @Output() public outToParent = new EventEmitter(); // СОБЫТИЕ ДЛЯ ПОСЫЛКИ ДАННЫХ  look for the function   sendToParent()
  DataToSend: InterfaceToSave = {
    configitemname: ''
  };




  // form groups  see on init iether
  step2FormGroup: FormGroup;

  // for test ngModel
  ConfName: string;

  outdata: string;
  Arr: data_types;



// ************* SelectsData ****************
  SectionName; SectionObject: ConfigItemType;
  DataTypeName; DataTypeObject: data_types;
// *******************************************

  // *************** Data to Out *********************
  configitemtype: string;
  configitemname: string ;
  defaultvalue ;
  minvalue ;
  maxvalue ;
  dinamicflag ;
  readonlyflag ;
  configitemtype2: string;
  configitemname2: string ;
  defaultvalue2: string ;
  minvalue2: string ;
  maxvalue2: string ;
  dinamicflag2 ;
  readonlyflag2 ;
  // ******************* Other Params ****************
  configitemtypesid ;
 // ******************************************************

// **************************************************************************** functions ************************************************

// *******************************************************
  onSelect2(data: User): void {
    this.outdata = data.name;
  }


  // *********************** Save data Functions *****************************
  SaveSectionObject( arr): void {this.SectionObject = arr; }
   SaveSectionName(data): void {this.SectionName = data; }
  SaveDataTypeOject( arr): void {this.DataTypeObject = arr; }
  SaveDataTypeName(data): void {this.DataTypeName = data; }
  SaveMax(data: string): void {
    this.maxvalue2 = data;
    console.log('max2 == ' + this.maxvalue2);
  }

  saveOthers(paramname: string, defaultval, minvalue, maxvalue, checkboxDinamicFlag , checkboxReadOnly  ) {
   // console.log(paramname + '\n' + defaultval + '\n' + minvalue + '\n' + maxvalue + '\n' + checkboxDinamicFlag + '\n' + checkboxReadOnly);
   // this.step4.ForTest.configitemname = paramname; //
    this.configitemname = paramname;
    this.defaultvalue = defaultval;
    this.minvalue = minvalue;
    this.maxvalue = maxvalue;
    this.dinamicflag = checkboxDinamicFlag;
    this.readonlyflag = checkboxReadOnly;
    // ******************* Other Params ****************
    this.configitemtypesid = this.DataTypeObject.data_types_id;

   // not working this.DataToSend.name = paramname;
   // this.DataToSend = {name: paramname};
    this.DataToSend.configitemname = paramname;

    // this.sendToParent( this.DataToSend);

    console.log(
      'for test: ' + 'this.step4.ForTest' + ' ' + this.configitemname + '\n' +
    this.defaultvalue + '\n' +
    this.minvalue + '\n' +
    this.maxvalue + '\n' +
    this.dinamicflag + '\n' +
    this.readonlyflag + '\n' +
   'ConfItemId: ' + this.configitemtypesid + '\n' +
    'Section : ' + this.SectionObject.config_items_id); // difficult question
    // !!!!!!!!!we need to save section somewhere
    console.log('def2====' + this.defaultvalue2 + 'min2====' + this.minvalue2 + 'max2===' + this.maxvalue2);

  }

  // ***************************************************************************
  // *********************** Display Functions ********************************
  displayFn(user?: data_types): string | undefined {
    // this.outdata = user.data_types_name; unnecessary line
    return user ? user.data_types_name : undefined;
  }
  displaySections(temp?: ConfigItemType): string | undefined {
    // this.outdata = temp.config_item_name; unnecessary line
    return  temp ? temp.config_item_name : undefined;
  }
   // ****************************************************************************
  // ******************************** set configItemType
  SetConfigItemTypes(type: string) {
    this.configitemtype = '' + 1; // here sould be search for id of confiitemtypeid by name
  }


  // ************************ Dialog Actions **********************************
  onCloseClick() {

  }

  sendToParent( outdata ) {
    this.outToParent.emit( outdata );
  }


  ngOnInit() {
    this.step2FormGroup = this.fb.group({
      step2Ctrl: ['', Validators.required],
      step2input1: ['', Validators.required],
      step2input2: ['', Validators.required],
      step2Def: ['', Validators.required],
      step2Max: ['', Validators.required],
      step2Min: ['', Validators.required],

    });
     // sign child group of controls to parent in order to check if it is valid or not
    this.step2FormGroup.statusChanges.subscribe(st => {this.paramWindow.secondFormGroup = this.step2FormGroup; });
    }
}

