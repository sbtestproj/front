import { data_types } from '../Models/Entities/data_types';
import { moduleEntity} from '../Models/Entities/moduleEntity';
import { moduleVersionsEntity} from '../Models/Entities/moduleVersionsEntity';
import { ConfigitemSections} from '../Models/Entities/configitemSections';
import {ConfigItemPossibleValues} from '../Models/Entities/configItemPossibleValues';


export interface modules_to_save {
module_name: string;
}



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
 dynamicflag: boolean;
 ignoreflag: boolean;
 readonlyflag: boolean;
 originalposition: number;
 isnullbale: boolean;
 isprimarykey: boolean;
 isforeignkey: boolean;
 configitemsectionsid: number;
 moduleversions: moduleVersionsEntity;
 modules: moduleEntity;
 dataType: data_types;
 configItemSections: ConfigitemSections;
 configitempossiblevalues: ConfigItemPossibleValues[];
}
