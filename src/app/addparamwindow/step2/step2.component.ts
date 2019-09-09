import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { ServiceHttpService} from '../../Service/service-http.service';
import {data_types} from '../../Models/Entities/data_types';
import { ConfigItemType} from '../../Models/Entities/ConfigItemType';
import { AddparamwindowComponent } from '../addparamwindow.component';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { InterfaceToSave} from '../InterfaceToSave';
import { ParamService} from '../Service/param.service';
import {ConfigitemSections} from '../../Models/Entities/configitemSections';

interface User {
  name: string;
}


@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.css']
})



export class Step2Component implements OnInit {
  constructor(public httpService: ServiceHttpService, private fb: FormBuilder,
              public paramWindow: AddparamwindowComponent,
              public paramService: ParamService
  ) {
  }


  flag: boolean;
  // for test ngModel
  // event to parent
  @Output() public outToParent = new EventEmitter(); // СОБЫТИЕ ДЛЯ ПОСЫЛКИ ДАННЫХ  look for the function   sendToParent()
  DataToSend: InterfaceToSave = {
    configitemname: ''
  };


  // form groups  see on init iether
  public step2FormGroup: FormGroup;
  test = 'test'; // data_types = { data_types_id: null, data_types_name: 'Int'};


  // for test ngModel
  type = 'number';
  outdata: string;

  // *************** Data to Out *********************
  configitemname: string;
  readonlyflag;

  // ******************************************************

// **************************************************************************** functions ************************************************
// ***************** 03.09.2019 ***********************
  // *************************************************************************  getting controlPraramname
  controlParamnameChanged() {
    this.paramService.FullData.configitemname = this.step2FormGroup.get('ctrl_ParamName').value;  // ControlParamName
  }

  //// *************************************************************************  getting Section ?????????????????????????????
  ctrl_ConfigItemsSectionsClick(configitemsectionname: string) {
    this.paramService.FullData.configItemSections.config_item_section_name = configitemsectionname;
  }

  ctrl_ConfigItemsSectionsChanged() {
    this.paramService.FullData.configItemSections.config_item_section_name = this.step2FormGroup.get('ctrl_ConfigItemsSections').value;
  }


  // *************************************************************************  getting DataType
  ctrl_DataTypeChanged(object: data_types) {
    this.paramService.FullData.dataType.data_types_name = object.data_types_name;
    this.paramService.FullData.datatypesid = object.data_types_id;
    if (object.data_types_name === 'Varchar') {
      console.log('datatype:  varchar');
      // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      this.step2FormGroup.get('ctrl_DefaultValue').enable();
      this.step2FormGroup.get('ctrl_DefaultValue').enable();
      this.step2FormGroup.get('ctrl_MaxValue').setValue('');
      this.step2FormGroup.get('ctrl_MaxValue').disable();
      this.paramService.FullData.maxvalue = null;
      this.step2FormGroup.get('ctrl_MinValue').setValue('');
      this.step2FormGroup.get('ctrl_MinValue').disable();
      this.paramService.FullData.minvalue = null;
      // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    }
    if (object.data_types_name === 'Int') {
      this.step2FormGroup.get('ctrl_MaxValue').enable();
      this.step2FormGroup.get('ctrl_MinValue').enable();
      this.step2FormGroup.get('ctrl_MaxValue').enable();
      this.step2FormGroup.get('ctrl_MinValue').enable();
      this.step2FormGroup.get('ctrl_DefaultValue').enable();
      this.step2FormGroup.get('ctrl_DefaultValue').enable();
    }
    if (object.data_types_name === 'Boolean') {
      this.step2FormGroup.get('ctrl_DefaultValue').enable();
      this.step2FormGroup.get('ctrl_DefaultValue').enable();
      this.step2FormGroup.get('ctrl_MaxValue').setValue('');
      this.step2FormGroup.get('ctrl_MaxValue').disable();
      this.paramService.FullData.maxvalue = null;
      this.step2FormGroup.get('ctrl_MinValue').setValue('');
      this.step2FormGroup.get('ctrl_MinValue').disable();
      this.paramService.FullData.minvalue = null;
    }

  }

  // ************************************************************************* getting DefaultValue
  ctrl_DefaultValueChanged() {
    this.paramService.FullData.defaultvalue = this.step2FormGroup.get('ctrl_DefaultValue').value;

    if (this.step2FormGroup.get('ctrl_MaxValue').value >= this.step2FormGroup.get('ctrl_MinValue').value ) {
      this.step2FormGroup.get('ctrl_MinValue').clearValidators();
      this.step2FormGroup.get('ctrl_MinValue').updateValueAndValidity();
      this.step2FormGroup.get('ctrl_MaxValue').clearValidators();
      this.step2FormGroup.get('ctrl_MaxValue').updateValueAndValidity();
    }

    // getting data from max and min
   // if(this.step2FormGroup.get('ctrl_DefaultValue').value)

    if (this.paramService.FullData.dataType.data_types_name === 'Int') {
      // set validation
      if (this.paramService.FullData.maxvalue !== null) {
        console.log('case1');
        this.step2FormGroup.get('ctrl_DefaultValue').setValidators([Validators.max(this.paramService.FullData.maxvalue)]);
      }
      if (this.paramService.FullData.minvalue !== null) {
        console.log('case2' + 'minval' + this.paramService.FullData.minvalue);
        this.step2FormGroup.get('ctrl_DefaultValue').setValidators([Validators.min(this.paramService.FullData.minvalue)]);
      }
      if (this.paramService.FullData.minvalue !== null && this.paramService.FullData.maxvalue !== null) {
        console.log('case 3');
        this.step2FormGroup.get('ctrl_DefaultValue').setValidators([Validators.min(this.paramService.FullData.minvalue)
          , Validators.max(this.paramService.FullData.maxvalue)]);
      }
    }

  }

// *********************************************************************************getting max value
  ctrl_MaxValueChanged() {

    this.paramService.FullData.maxvalue = this.step2FormGroup.get('ctrl_MaxValue').value;
   // update validation
    if (this.step2FormGroup.get('ctrl_DefaultValue').value >= this.step2FormGroup.get('ctrl_MinValue').value ) {
      this.step2FormGroup.get('ctrl_DefaultValue').clearValidators();
      this.step2FormGroup.get('ctrl_DefaultValue').updateValueAndValidity();
      this.step2FormGroup.get('ctrl_MinValue').clearValidators();
      this.step2FormGroup.get('ctrl_MinValue').updateValueAndValidity();
    }
    // validation
    if (this.paramService.FullData.dataType.data_types_name === 'Int') {

      if (this.paramService.FullData.defaultvalue !== null) {
        console.log('max: ' + this.step2FormGroup.get('ctrl_DefaultValue').value);
        this.step2FormGroup.get('ctrl_MaxValue')
          .setValidators([Validators.min(this.step2FormGroup.get('ctrl_DefaultValue').value)]);
      }

      if (this.paramService.FullData.minvalue !== null) {
        this.step2FormGroup.get('ctrl_MaxValue').setValidators([Validators.min(this.paramService.FullData.minvalue)]);
      }

      if (this.paramService.FullData.defaultvalue !== null && this.paramService.FullData.minvalue !== null) {
        this.step2FormGroup.get('ctrl_MaxValue').setValidators([Validators.min(this.paramService.FullData.minvalue)
          , Validators.min(this.step2FormGroup.get('ctrl_DefaultValue').value)]);
      }

    }
  }

  // *****************************************************************************************getting min value
  ctrl_MinValueChanged() {

    this.paramService.FullData.minvalue = this.step2FormGroup.get('ctrl_MinValue').value;
    // update validators
    if (this.step2FormGroup.get('ctrl_DefaultValue').value <= this.step2FormGroup.get('ctrl_MaxValue').value ) {
      this.step2FormGroup.get('ctrl_DefaultValue').clearValidators();
      this.step2FormGroup.get('ctrl_DefaultValue').updateValueAndValidity();
      this.step2FormGroup.get('ctrl_MaxValue').clearValidators();
      this.step2FormGroup.get('ctrl_MaxValue').updateValueAndValidity();
    }

    if (this.paramService.FullData.dataType.data_types_name === 'Int') {
      if (this.paramService.FullData.defaultvalue !== null) {
        this.step2FormGroup.get('ctrl_MinValue')
          .setValidators([Validators.max(this.step2FormGroup.get('ctrl_DefaultValue').value)]);
      }
      if (this.paramService.FullData.maxvalue !== null) {
        this.step2FormGroup.get('ctrl_MinValue')
          .setValidators([Validators.max(this.step2FormGroup.get('ctrl_MaxValue').value)]);
      }

      if (this.paramService.FullData.defaultvalue !== null && this.paramService.FullData.maxvalue !== null) {
        console.log('default: ' + this.step2FormGroup.get('ctrl_DefaultValue').value
        + ' ' + this.step2FormGroup.get('ctrl_MinValue').value);
        this.step2FormGroup.get('ctrl_MinValue')
            .setValidators([Validators.max(this.step2FormGroup.get('ctrl_DefaultValue').value),
              Validators.max(this.step2FormGroup.get('ctrl_MaxValue').value)
            ]);
      }
    }
  }
  // ************************************************************************************************************* getDinamic flag
  DynamicFlagChanged(Dflag) {
  this.paramService.FullData.dynamicflag = Dflag;
  }
  // ************************************************************************************************************* getDinamic flag
  ReadOnlyFlagChanged(Rflag) {
    this.paramService.FullData.readonlyflag = Rflag;
  }

  // *************** end 03.09.2019 *******************
// *******************************************************

  saveOthers(paramname: string, defaultval, minvalue, maxvalue, checkboxDinamicFlag , checkboxReadOnly  ) {
  //  this.dinamicflag = checkboxDinamicFlag;
    this.readonlyflag = checkboxReadOnly;
    // ******************* Other Params ****************
  }

  // ***************************************************************************
  // *********************** Display Functions ********************************
  displayFn(user?: data_types): string | undefined {
    // this.outdata = user.data_types_name; unnecessary line
    return user ? user.data_types_name : undefined;
  }
  displaySections(temp?: ConfigitemSections): string | undefined {
    // this.outdata = temp.config_item_name; unnecessary line
    return  temp ? temp.config_item_section_name : undefined;
  }
   // ****************************************************************************


  // ************************ Dialog Actions **********************************
  onCloseClick() {

  }

  sendToParent( outdata ) {
    this.outToParent.emit( outdata );
  }


  ngOnInit() {

    this.step2FormGroup = this.fb.group({
      ctrl_ParamName: ['', Validators.required],
      ctrl_DataType: ['', Validators.required],
      ctrl_ConfigItemsSections: ['', Validators.required],
      // step2Def: ['', Validators.required],
      ctrl_MaxValue: null,
//      ctrl_MinValue: [{value: '', disabled: true }, Validators.required],
      ctrl_MinValue: null,
      ctrl_DefaultValue: null,

    });

    this.step2FormGroup.get('ctrl_MaxValue').disable();
    this.step2FormGroup.get('ctrl_MinValue').disable();
    this.step2FormGroup.get('ctrl_DefaultValue').disable();

     // sign child group of controls to parent in order to check if it is valid or not
    this.step2FormGroup.statusChanges.subscribe(st => {this.paramWindow.secondFormGroup = this.step2FormGroup;});

    // если изменилось минимальное значение то максимум не может быть меньше минимального значения
    // this.step2FormGroup.get('ctrl_MinValue').valueChanges.subscribe
    // ((minval) => { this.step2FormGroup.get('ctrl_MaxValue')
    //   .setValidators(Validators.compose([Validators.required, Validators.min(minval)])); } );
    //  // ********************************************************************************************

  }
  // ----------------------------------------------------------------------------------------------------------------------




}

