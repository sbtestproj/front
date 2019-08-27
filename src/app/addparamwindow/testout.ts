import { data_types } from '../Models/Entities/data_types';

export interface InterfaceToSave2 {
 congigitemtypeid: number;
 configsourcesid: number;
 datatypesid: number;
 moduleversionsid: number;
 configitemsid: number;
 configitemname: string;
 minvalue: number;
 maxvalue: number;
 defaultvalue: string;
 configitemdescription: string;
 referencedescription: number;
 verifiedbyexpert: boolean;
 divamicflag: boolean;
 ignoreflag: boolean;
 readonlyflag: boolean;
 originalposition: number;
 isnullbale: boolean;
 isprimarykey: boolean;
 isforeignkey: boolean;

 dataType: data_types;
}
