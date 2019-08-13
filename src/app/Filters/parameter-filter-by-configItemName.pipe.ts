import {Pipe, PipeTransform} from '@angular/core';
import { HttpData} from '../OutData';

import { mapTo, delay } from 'rxjs/operators';
import {Parameter} from '../Models/parameter';

@Pipe({
  name: 'paramFilterByConfigItemName'
})

export class ParameterFilterByConfigItemNamePipe implements PipeTransform {
  transform(params: any, searchTerm: string): HttpData[] {
    if (!searchTerm) {
      return params;
    }
    return params.filter(param => ((param[0].toLowerCase().indexOf(searchTerm.toLowerCase()))) !== -1);
  }
}
