import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { ServiceHttpService} from '../../Service/service-http.service';
import {data_types} from '../../Models/Entities/data_types';
import { ConfigItemType} from '../../Models/Entities/ConfigItemType';
import { AddparamwindowComponent } from '../addparamwindow.component';
import { Step4Component} from '../step4/step4.component';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import { InterfaceToSave} from '../InterfaceToSave';
import { ParamService} from '../Service/param.service';
import {validate} from 'codelyzer/walkerFactory/walkerFn';
import {ThirdStepComponent} from '../step3/third-step.component';

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
               public step4: Step4Component, public paramService: ParamService,
               public step3: ThirdStepComponent
  ) {
  }



  // event to parent
  // @Output() public outToParent = new EventEmitter(); // СОБЫТИЕ ДЛЯ ПОСЫЛКИ ДАННЫХ  look for the function   sendToParent()
  // DataToSend: InterfaceToSave = {
  //   configItemName: ''
  // };

  // checking datatype if it is boolean
  isBoolean: boolean;
  selected: any;

  // form groups  see on init iether
 public step2FormGroup: FormGroup;
 test = 'test'; // data_types = { data_types_id: null, data_types_name: 'Int'};



  flag: boolean;
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
   SaveSectionName(data): void {
    this.SectionName = data;
    this.paramService.FullData.sectionName = data;
  }
  SaveDataTypeOject( arr): void {this.DataTypeObject = arr; }
  SaveDataTypeName(data): void {
    this.DataTypeName = data;
    this.paramService.FullData.dataType.data_types_name = data;
  }
  SaveMax(data: string): void {
    this.maxvalue2 = data;
    console.log('max2 == ' + this.maxvalue2);
  }
  SaveDef(data: string): void {
    this.defaultvalue2 = data;
    console.log('def2 == ' + this.defaultvalue2);
  }
  SaveMin(data: string): void {
    this.minvalue2 = data;
    console.log('min2 == ' + this.minvalue2);
  }

  saveOthers(paramname: string, checkboxDinamicFlag , checkboxReadOnly  ) {
   // console.log(paramname + '\n' + defaultval + '\n' + minvalue + '\n' + maxvalue + '\n' + checkboxDinamicFlag + '\n' + checkboxReadOnly);
   // this.step4.ForTest.configitemname = paramname; //
    this.configitemname = paramname;
    this.dinamicflag = checkboxDinamicFlag;
    this.readonlyflag = checkboxReadOnly;
    // ******************* Other Params ****************
    this.configitemtypesid = this.DataTypeObject.data_types_id;

    this.paramService.FullData.dynamicFlag = checkboxDinamicFlag;
    this.paramService.FullData.readonlyFlag = checkboxReadOnly;
   // not working this.DataToSend.name = paramname;
   // this.DataToSend = {name: paramname};
   // this.DataToSend.configItemName = paramname;

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

    console.log('***********************************************');
    console.log(this.paramService.FullData.configItemName + '/n' +
    this.paramService.FullData.maxvalue + '/n' + this.paramService.FullData.minvalue + '/n' + this.paramService.FullData.defaultvalue + '/n'
    + this.paramService.FullData.dataType.data_types_name + '/n' + this.paramService.FullData.dataType.data_types_id + '/n'
      + this.paramService.FullData.dynamicFlag + '/n' + this.paramService.FullData.readonlyFlag + '/n'
    + this.paramService.FullData.sectionName);
  }

  // ***************************************************************************
  // *********************** Display Functions ********************************
  displayFn(user?: data_types): string | undefined {
    // this.outdata = user.data_types_name; unnecessary line
    console.log('dsp datatype' + user.data_types_name);
    return user ? user.data_types_name : undefined;
  }
  displaySections(temp?: ConfigItemType): string | undefined {
    // this.outdata = temp.config_item_name; unnecessary line
    console.log('dsp sect' + temp.config_item_name);
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

  // sendToParent( outdata ) {
  //   this.outToParent.emit( outdata );
  // }

  ngOnInit() {
    this.step2FormGroup = this.fb.group({
      step2Ctrl: ['', Validators.required],
      step2input1: ['', Validators.required],
      step2input2: ['', Validators.required],
      step2Def: [''],
      step2Max: [''],
      step2Min: [''],
    });
    this.paramService.isBoolean = false;
    this.step2FormGroup.get('step2Min').disable();
    this.step2FormGroup.get('step2Max').disable();
    this.step2FormGroup.get('step2input1').valueChanges.subscribe( vl => {
      if (this.DataTypeName === 'Int') {
        this.step2FormGroup.get('step2Min').enable();
        this.step2FormGroup.get('step2Max').enable();
        this.paramService.isBoolean = false ;
      }
      else {
        this.step2FormGroup.get('step2Def').clearValidators();
        this.step2FormGroup.get('step2Def').updateValueAndValidity();
        this.step2FormGroup.get('step2Min').disable();
        this.step2FormGroup.get('step2Max').disable();
        this.paramService.FullData.maxvalue = null;
        this.paramService.FullData.minvalue = null;
        this.paramService.FullData.defaultvalue = null;
        this.paramService.isBoolean = false ;
      }
      if (this.DataTypeName === 'Boolean') {
        this.paramService.isBoolean = true ;
      }
    });
     // sign child group of controls to parent in order to check if it is valid or not
    this.step2FormGroup.statusChanges.subscribe(st => {this.paramWindow.secondFormGroup = this.step2FormGroup; });
    // defines max min and default value and updates their validators.------------------------------
    this.step2FormGroup.get('step2Def').valueChanges.subscribe( vl => {
      console.log('step2Def Changed');
      if (this.step2FormGroup.get('step2Min').value !== null || this.step2FormGroup.get('step2Max').value !== null
        && this.step2FormGroup.get('step2Def').value !== null) {
        console.log('if step2Def not nulls' + this.paramService.FullData.minvalue + this.step2FormGroup.get('step2Min').value +
          this.paramService.FullData.maxvalue + this.step2FormGroup.get('step2Max').value +
          this.paramService.FullData.defaultvalue + this.step2FormGroup.get('step2Def').value );
        this.step2FormGroup.get('step2Def').clearValidators();
        this.step2FormGroup.get('step2Max').clearValidators();
        this.step2FormGroup.get('step2Min').clearValidators();
        this.step2FormGroup.get('step2Def').setValidators([Validators.min(this.step2FormGroup.get('step2Min').value),
          Validators.max(this.step2FormGroup.get('step2Max').value)]);
        this.step2FormGroup.get('step2Max').setValidators([Validators.min(this.step2FormGroup.get('step2Min').value)]);
        this.step2FormGroup.get('step2Min').setValidators([Validators.max(this.step2FormGroup.get('step2Max').value)]);
      }
      else if (this.paramService.FullData.minvalue === null && this.paramService.FullData.maxvalue === null) {
        console.log('both nulls def elseif');
        this.flag = false;
        this.step2FormGroup.get('step2Def').clearValidators();
        this.step2FormGroup.get('step2Max').clearValidators();
        this.step2FormGroup.get('step2Min').clearValidators();
      }
    });

    this.step2FormGroup.get('step2Min').valueChanges.subscribe( vl => {
      console.log('step2Min Changed');
      this.step2FormGroup.get('step2Def').updateValueAndValidity();
    });

    this.step2FormGroup.get('step2Max').valueChanges.subscribe(vl => {
      console.log('step2Max Changed');
      this.step2FormGroup.get('step2Def').updateValueAndValidity();
    });
  }
 // ----------------------------------------------------------------------------------------------------------------------
}


