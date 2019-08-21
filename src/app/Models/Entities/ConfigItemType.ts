export interface ConfigItemType {
  config_items_id: number;
  config_item_name: string;
  config_sources_id: number;
  config_item_types_id: number;
  config_item_description: string;
  module_versions_id: number;
  default_value: string;
  verified_by_expert: boolean;
  min_value: string;
  max_value: string;
  dinamic_flag: boolean;
  read_only_flag: boolean;
}
