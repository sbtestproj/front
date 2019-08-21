import {Pipe, PipeTransform} from '@angular/core';

import { mapTo, delay } from 'rxjs/operators';
import {Parameter} from '../Models/parameter';
import {HttpData} from '../OutData';
import { ConfigItemType } from '../Models/Entities/ConfigItemType';

export interface User {
  name: string;
}

@Pipe({
  name: 'sectionfilter'
})

export class SectionFilterPipe implements PipeTransform {
  transform(params: ConfigItemType[], searchTerm: string): ConfigItemType[] {
    if (!searchTerm) {
      return params;
    }
    return params.filter(param => ((param.config_item_name.toLowerCase().indexOf(searchTerm.toLowerCase()))) !== -1);
  }
}
