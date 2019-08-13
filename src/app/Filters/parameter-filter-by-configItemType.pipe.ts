import {Pipe, PipeTransform} from '@angular/core';
import { HttpData} from '../OutData';

import { mapTo, delay } from 'rxjs/operators';
import {Parameter} from '../Models/parameter';

@Pipe({
  name: 'paramFilterByConfigItemType'
})

export class ParameterFilterByConfigItemTypePipe implements PipeTransform {
  transform(params: any, searchTerm: string): HttpData[] {
    if (!searchTerm) {
      return params;
    }
    return params.filter(param => ((param[1].toLowerCase().indexOf(searchTerm.toLowerCase()))) !== -1);
  }
}
