import { Injectable } from '@angular/core';
import { InterfaceToSave2} from '../testout';
import {InterfaceToSave} from '../InterfaceToSave';
import {data_types} from '../../Models/Entities/data_types';
import {possible} from '../../Models/Entities/possibleValues';
import {moduleOut} from '../../Models/modulOut';



@Injectable({
  providedIn: 'root'
})
export class ParamService {
  constructor() { }
  isBoolean: boolean; // to check step2 data type value and dynamically change fields

// public FullData: InterfaceToSave2 =  {
//   configitemdescription : null,
//   configitemname: null,
//   configitemsid: null,
//   configsourcesid: null,
//   congigitemtypeid: null,
//   datatypesid: null,
//   defaultvalue: null,
//   divamicflag: null,
//   ignoreflag: null,
//   isforeignkey: null,
//   isnullbale: null,
//   isprimarykey: null,
//   maxvalue: null,
//   minvalue: null,
//   moduleversionsid: null,
//   originalposition: null,
//   readonlyflag: null,
//   referencedescription: null,
//   verifiedbyexpert: null,
//
//   dataType: { data_types_name: null, data_types_id: null},
// } ;

public FullData: InterfaceToSave = {
  configItemTypeId: null,
  configSourcesId: null,
  configItemsId: null,
  configItemName: null,
  sectionName: null,
  minvalue: null,
  maxvalue: null,
  defaultvalue: null,
  configItemDescription: null,
  referenceDescription: null,
  verifiedByExpert: null,
  dynamicFlag: null,
  ignoreFlag: null,
  readonlyFlag: null,
  originalPosition: null,
  isNullable: null,
  isPrimaryKey: null,
  isForeignKey: null,
  dataType: { data_types_name: null, data_types_id: null},
  possibleValues: [], // we have to think about how to initialize this array
  moduleNameVersion: { module_versions_id: null, modules_id: null, version_number: null, module_name: null}
  } ;
}
