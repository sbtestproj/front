import { Injectable } from '@angular/core';
import { InterfaceToSave2} from '../testout';



@Injectable({
  providedIn: 'root'
})
export class ParamService {
  constructor() { }

public FullData: InterfaceToSave2 =  {
  configitemdescription : null,
  configitemname: null,
  configitemsid: null,
  configsourcesid: null,
  congigitemtypeid: null,
  datatypesid: null,
  defaultvalue: null,
  divamicflag: null,
  ignoreflag: null,
  isforeignkey: null,
  isnullbale: null,
  isprimarykey: null,
  maxvalue: null,
  minvalue: null,
  moduleversionsid: null,
  originalposition: null,
  readonlyflag: null,
  referencedescription: null,
  verifiedbyexpert: null,

  dataType: { data_types_name: null, data_types_id: null},
} ;




}
