import {data_types} from '../Models/Entities/data_types';
import {possible} from '../Models/Entities/possibleValues';
import {moduleOut} from '../Models/modulOut';

export interface InterfaceToSave {
  configItemTypeId: number;
  configSourcesId: number;
  sectionName: string;
  configItemsId: number;
  configItemName: string;
  minvalue: number;
  maxvalue: number;
  defaultvalue: string;
  configItemDescription: string;
  referenceDescription: string;
  verifiedByExpert: boolean;
  dynamicFlag: boolean;
  ignoreFlag: boolean;
  readonlyFlag: boolean;
  originalPosition: number;
  isNullable: boolean;
  isPrimaryKey: boolean;
  isForeignKey: boolean;
  dataType: data_types;
  possibleValues: possible[];
  moduleNameVersion: moduleOut;
}
