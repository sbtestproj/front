import {Pipe, PipeTransform} from '@angular/core';
import { HttpData} from '../OutData';

import { mapTo, delay } from 'rxjs/operators';
import {Parameter} from '../Models/parameter';

@Pipe({
  name: 'paramFilterBySourceType'
})

export class ParameterFilterBySourceTypePipe implements PipeTransform {
  transform(params: any, searchTerm: string): HttpData[] {
    if (!searchTerm) {
      return params;
    }
    return params.filter(param => ((param[6].toLowerCase().indexOf(searchTerm.toLowerCase()))) !== -1);
  }
}
