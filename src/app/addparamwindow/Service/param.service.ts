import { Injectable } from '@angular/core';
import {InterfaceToSave2, modules_to_save} from '../testout';
import { moduleVersionsEntity} from '../../Models/Entities/moduleVersionsEntity';
import { ConfigitemSections } from '../../Models/Entities/configitemSections';
import { HttpClient} from '@angular/common/http';
import { ConfigItemPossibleValues } from '../../Models/Entities/configItemPossibleValues';
import {of} from 'rxjs';
import {ConfigItemType} from '../../Models/Entities/ConfigItemType';

@Injectable({
  providedIn: 'root'
})
export class ParamService {
  constructor( public  httpClient: HttpClient) { }

  isBoolean: boolean; // to check step2 data type value and dynamically change fields

public FullData: InterfaceToSave2 =  {
  configitemdescription : ' ',
  configitemname: null,
  configitemsid: null,
  configsourcesid: null,
  congigitemtypeid: null,
  datatypesid: null,
  defaultvalue: null,
  dynamicflag: false,
  readonlyflag: false,
  ignoreflag: false,
  isforeignkey: null,
  isnullbale: null,
  isprimarykey: null,
  maxvalue: null,
  minvalue: null,
  configitemsectionsid: null,

  originalposition: null,

  referencedescription: null,
  verifiedbyexpert: null,

  moduleversions: { module_versions_id: null, modules_id: null, version_number: null  },

  modules: { modules_id: null, module_name: null, responsible_person: null, module_description: null },

  dataType: { data_types_name: null, data_types_id: null},
  moduleversionsid: null,

  configItemSections: { config_item_sections_id: null, config_item_section_name: null, config_item_section_description: ''},

  configitempossiblevalues: null
  // {config_item_possible_values_id: null, config_items_id: null, config_item_possible_value: null, config_item_possible_value_description: null}

} ;

  moduletosave: modules_to_save;
  // baseUrl = 'http://10.221.190.40:8080/hiberProject/';
  baseUrl = 'http://127.0.0.1:8181/hiberProject/';
  postUrl;

public  ClearFullDAta() {
    this.FullData =  {
      configitemdescription : ' ',
      configitemname: null,
      configitemsid: null,
      configsourcesid: null,
      congigitemtypeid: null,
      datatypesid: null,
      defaultvalue: null,
      dynamicflag: false,
      readonlyflag: false,
      ignoreflag: false,
      isforeignkey: null,
      isnullbale: null,
      isprimarykey: null,
      maxvalue: null,
      minvalue: null,
      configitemsectionsid: null,

      originalposition: null,

      referencedescription: null,
      verifiedbyexpert: null,

      moduleversions: { module_versions_id: null, modules_id: null, version_number: null  },

      modules: { modules_id: null, module_name: null, responsible_person: null, module_description: null },

      dataType: { data_types_name: null, data_types_id: null},
      moduleversionsid: null,

      configItemSections: { config_item_sections_id: null, config_item_section_name: null, config_item_section_description: ''},

      configitempossiblevalues: null
    } ;

  }



  // ***************************************   function POST   *****************************************************
  // *****************************************               *******************************************************
  // ***************************************************************************************************************


  postData() {
    console.log('save modules');
    // const headers = new Headers({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'});
    // const options = new RequestOptions({ headers: headers });
    this.postUrl = this.baseUrl + 'modules';
    //  const body = {data};
    // module_description
    // responsible_person
    console.log('new :' + this.FullData.modules.module_name);
    this.httpClient.post(this.postUrl,
      { module_name: this.FullData.modules.module_name,
        module_description: '',
        responsible_person: ''} , // this.moduletosave,
        { headers: {'Content-Type': 'text/plain' } }    // text/plain
    ).subscribe(
      (res: moduleVersionsEntity[]) => {
        this.FullData.modules.modules_id = res[0].modules_id;

        console.log('ver id: ' + res[0].modules_id);

        this.postDataVersions();

      },
      err => {
        console.log('Error while saving moudes', err);
      });
  }


  postDataVersions() {
    console.log('save dataVersions');
    this.postUrl = this.baseUrl + 'module_versions';

    console.log('new :' + this.FullData.moduleversions.version_number);
    this.httpClient.post(this.postUrl,
      { modules_id: this.FullData.modules.modules_id,
        version_number: this.FullData.moduleversions.version_number,
        } , // this.moduletosave,
      { headers: {'Content-Type': 'text/plain'}}    // text/plain
    ).subscribe(
      (res: moduleVersionsEntity) => {
        console.log('versionid: ' + res[0].module_versions_id);
        this.FullData.moduleversionsid = res[0].module_versions_id; // put value we got to full arr
        this.postConfigItemsSections();


      },
      err => {
        console.log('Error while saving DataVersions', err);
      });
  }

  postConfigItem() {
    console.log('save_config_item');
    this.postUrl = this.baseUrl + 'config_items';

    console.log('new :' + this.FullData.moduleversions.version_number);
    this.httpClient.post(this.postUrl,
      {config_sources_id: 1,
        config_item_types_id: 1,
        data_types_id: this.FullData.datatypesid,
        module_versions_id: this.FullData.moduleversionsid,
        config_item_name: this.FullData.configitemname,
        min_value: this.FullData.minvalue,
        max_value: this.FullData.maxvalue,
        default_value: this.FullData.defaultvalue,
        config_item_description: this.FullData.configitemdescription,
        reference_description: '',
        column_ordinal_position: 0,
        is_nullable: false,
        verified_by_expert: false,
        dynamic_flag: this.FullData.dynamicflag,
        ignore_flag: false,
        is_primary_key: false,
        is_foreign_key: false,
        read_only_flag: this.FullData.readonlyflag,
        config_item_sections_id: this.FullData.configitemsectionsid
      } , // this.moduletosave,
      { headers: {'Content-Type': 'text/plain' } }    // text/plain
    ).subscribe(
      (res: ConfigItemType) => {
        console.log('New Config Item Id: ' + res.config_items_id);
        console.log('New Config Item full: ' + res);
        this.FullData.configitemsid = res.config_items_id;
        this.SavePossibleValues();
      },
      err => {
        console.log('Error while saving configItem', err);
      });
  }
  postConfigItemsSections() {
    console.log('save configitemsSections');
    this.postUrl = this.baseUrl + 'config_item_sections';

    console.log('new :' + this.FullData.moduleversions.version_number);
    this.httpClient.post(this.postUrl,
      { config_item_section_name: this.FullData.configItemSections.config_item_section_name,
        config_item_section_description: this.FullData.configItemSections.config_item_section_description,
      } , // this.moduletosave,
      { headers: {'Content-Type': 'text/plain'}}    // text/plain
    ).subscribe(
      (res: ConfigitemSections) => {
        console.log('confItemSectionId : ' + res[0].config_item_sections_id);
        this.FullData.configitemsectionsid = res[0].config_item_sections_id;
       // this.FullData.moduleversionsid = res[0].module_versions_id; // put value we got to full arr
        this.postConfigItem();

      },
      err => {
        console.log('Error while saving configitem sections', err);
      });
  }

  SavePossibleValues() {
  const urlway = this.baseUrl +  'config_item_possible_values';
  console.log('save configitemspossiblevalues');

  for ( const posval of this.FullData.configitempossiblevalues) {
    console.log( posval.config_item_possible_value);
    // *******************************************
    this.httpClient.post(urlway,
      {config_item_possible_value: posval.config_item_possible_value,
        config_item_possible_value_description: posval.config_item_possible_value_description,
        config_items_id: this.FullData.configitemsid,
        config_item_possible_values_id: null
      } , // this.moduletosave,
      { headers: {'Content-Type': 'text/plain'}}    // text/plain
    ).subscribe(
      (res: ConfigItemPossibleValues) => {
        console.log('confItemPossibleValue id : ' + res.config_item_possible_values_id);
        // this.FullData.configitemsectionsid = res[0].config_item_sections_id;
        // this.FullData.moduleversionsid = res[0].module_versions_id; // put value we got to full arr
       // this.postConfigItem();

      },
      err => {
        console.log('Error while saving PossibleValues', err);
      });
  }

  }


}
