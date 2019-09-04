import { Injectable } from '@angular/core';
import {InterfaceToSave2, modules_to_save} from '../testout';
import { moduleVersionsEntity} from '../../Models/Entities/moduleVersionsEntity';
import { ConfigitemSections } from '../../Models/Entities/configitemSections';
import { moduleEntity} from '../../Models/Entities/moduleEntity';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ParamService {
  constructor( public  httpClient: HttpClient) { }

  isBoolean: boolean; // to check step2 data type value and dynamically change fields

public FullData: InterfaceToSave2 =  {
  configitemdescription : null,
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

  configItemSections: { config_item_sections_id: null, config_item_section_name: null, config_item_section_description: ''}

} ;

  moduletosave: modules_to_save;
  baseUrl = 'http://127.0.0.1:8080/hiberProject/';
  postUrl;


  // ***************************************   function POST   *****************************************************
  // *****************************************               *******************************************************
  // ***************************************************************************************************************


  postData() {
    console.log('postrequest');
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
        console.log('Error occurred', err);
      });
  }
// *******************************************************************************************************************
//   postParam() {
//     console.log('postparam');
//     // const headers = new Headers({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'});
//     // const options = new RequestOptions({ headers: headers });
//     this.postUrl = this.baseUrl + 'appparameter';
//     //  const body = {data};
//     // module_description
//     // responsible_person
//     this.httpClient.post(this.postUrl, this.FullData , // this.moduletosave,
//       { headers: {'Content-Type': 'text/plain' } }    // text/plain
//     ).subscribe(
//       res => {
//         console.log(res);
//       },
//       err => {
//         console.log('Error occurred', err);
//       });
//   }

  postDataVersions() {
    console.log('postrequest');
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
        console.log('Error occurred', err);
      });
  }

  postConfigItem() {
    console.log('post_config_item');
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
        config_item_description: 'test description',
        reference_description: '',
        column_ordinal_position: null,
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
      res => {
        console.log(res[0]);
      },
      err => {
        console.log('Error occurred', err);
      });
  }
  postConfigItemsSections() {
    console.log('postrequest');
    this.postUrl = this.baseUrl + 'config_items_sections';

    console.log('new :' + this.FullData.moduleversions.version_number);
    this.httpClient.post(this.postUrl,
      { config_item_section_name: this.FullData.configItemSections.config_item_section_name,
        config_item_section_description: this.FullData.configItemSections.config_item_section_description,
      } , // this.moduletosave,
      { headers: {'Content-Type': 'text/plain'}}    // text/plain
    ).subscribe(
      (res: ConfigitemSections) => {
        console.log('confItemSectionId : ' + res.config_item_sections_id);
        this.FullData.configitemsectionsid = res.config_item_sections_id;
       // this.FullData.moduleversionsid = res[0].module_versions_id; // put value we got to full arr
        this.postConfigItem();

      },
      err => {
        console.log('Error occurred', err);
      });
  }


}
