import {Pipe, PipeTransform} from '@angular/core';
import { HttpData} from '../OutData';

import { mapTo, delay } from 'rxjs/operators';
import {Parameter} from '../Models/parameter';

@Pipe({
  name: 'paramFilterBySourceName'
})

export class ParameterFilterBySourceNamePipe implements PipeTransform {
  transform(params: Parameter[], searchTerm: string): HttpData[] {
    if (!searchTerm) {
      return params;
    }
    return params.filter(param => ((param[5].toLowerCase().indexOf(searchTerm.toLowerCase()))) !== -1);
  }
}
