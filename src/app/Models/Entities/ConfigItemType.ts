// export interface ConfigItemType {
//   config_items_id: number;
//   config_item_name: string;
//   config_sources_id: number;
//   config_item_types_id: number;
//   config_item_description: string;
//   module_versions_id: number;
//   default_value: string;
//   verified_by_expert: boolean;
//   min_value: string;
//   max_value: string;
//   dinamic_flag: boolean;
//   read_only_flag: boolean;
// }
import {moduleVersionsEntity} from './moduleVersionsEntity';
import {moduleEntity} from './moduleEntity';
import {data_types} from './data_types';
import {ConfigitemSections} from './configitemSections';
import {ConfigItemPossibleValues} from './configItemPossibleValues';

export interface ConfigItemType {
  config_items_id: number;

  config_sources_id: number;
  config_item_types_id: number;
  data_types_id;
  module_versions_id;
  config_item_name;
  min_value;
  max_value;
  default_value;
  config_item_description;
  reference_description;
  column_ordinal_position;
  is_nullable;
  verified_by_expert;
  dynamic_flag;
  ignore_flag;
  is_primary_key;
  is_foreign_key;
  read_only_flag;
  config_item_sections_id;

}
