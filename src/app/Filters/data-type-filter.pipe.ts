import {Pipe, PipeTransform} from '@angular/core';

import { mapTo, delay } from 'rxjs/operators';
import {Parameter} from '../Models/parameter';
import {HttpData} from '../OutData';
import {data_types} from '../Models/Entities/data_types';

export interface User {
  name: string;
}

@Pipe({
  name: 'datatypefilter'
})

export class DataTypeFilterPipe implements PipeTransform {
  transform(params: data_types[], searchTerm: string): data_types[] {
    if (!searchTerm) {
      return params;
    }
    return params.filter(param => ((param.data_types_name.toLowerCase().indexOf(searchTerm.toLowerCase()))) !== -1);
  }
}
