import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {FormControl} from '@angular/forms';
import { ServiceHttpService} from '../../Service/service-http.service';
import {data_types} from '../../Models/Entities/data_types';
import { ConfigItemType} from '../../Models/Entities/ConfigItemType';
import { AddparamwindowComponent } from '../addparamwindow.component';

export interface User {
  name: string;
}

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.css']
})



export class Step2Component implements OnInit {

  constructor( public httpService: ServiceHttpService, public paramWindow: AddparamwindowComponent) {
  }

  outdata: string;
  Arr: data_types;

// ************* SelectsData ****************
  SectionName; SectionObject: ConfigItemType;
  DataTypeName; DataTypeObject: data_types;
// *******************************************

  // *************** Data to Out *********************
  configitemname: string ;
  defaultvalue ;
  minvalue ;
  maxvalue ;
  dinamicflag ;
  readonlyflag ;

  // ******************* Other Params ****************
  configitemtypesid ;
 // ******************************************************

  onSelect2(data: User): void {
    this.outdata = data.name;
  }


  // *********************** Save data Functions *****************************
  SaveSectionObject( arr): void {this.SectionObject = arr; }
   SaveSectionName(data): void {this.SectionName = data; }
  SaveDataTypeOject( arr): void {this.DataTypeObject = arr; }
  SaveDataTypeName(data): void {this.DataTypeName = data; }

  saveOthers(paramname: string, defaultval, minvalue, maxvalue, checkboxDinamicFlag , checkboxReadOnly  )
  {
    // console.log(paramname + '\n' + defaultval + '\n' + minvalue + '\n' + maxvalue + '\n' + checkboxDinamicFlag + '\n' + checkboxReadOnly);

    this.configitemname = paramname;
    this.defaultvalue = defaultval;
    this.minvalue = minvalue;
    this.maxvalue = maxvalue;
    this.dinamicflag = checkboxDinamicFlag;
    this.readonlyflag = checkboxReadOnly;
    // ******************* Other Params ****************
    this.configitemtypesid = this.DataTypeObject.data_types_id;

    console.log(
      this.configitemname + '\n' +
    this.defaultvalue + '\n' +
    this.minvalue + '\n' +
    this.maxvalue + '\n' +
    this.dinamicflag + '\n' +
    this.readonlyflag + '\n' +
   'ConfItemId: ' + this.configitemtypesid + '\n' +
    'Section : ' + this.SectionObject.config_items_id); // difficult question
    // !!!!!!!!!we need to save section somewhere

  }

  // ***************************************************************************
  // *********************** Display Functions ********************************
  displayFn(user?: data_types): string | undefined {
    this.outdata = user.data_types_name;
    return user ? user.data_types_name : undefined;
  }
  displaySections(temp?: ConfigItemType): string | undefined {
    this.outdata = temp.config_item_name;
    return  temp ? temp.config_item_name : undefined;
  }
   // ****************************************************************************
  // ************************ Dialog Actions **********************************
  onCloseClick() {


  }


  ngOnInit() {

  }
}

