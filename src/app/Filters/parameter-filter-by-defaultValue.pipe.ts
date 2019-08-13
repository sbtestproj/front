import {Pipe, PipeTransform} from '@angular/core';
import { HttpData} from '../OutData';

import { mapTo, delay } from 'rxjs/operators';
import {Parameter} from '../Models/parameter';

@Pipe({
  name: 'paramFilterByDefaultValue'
})

export class ParameterFilterByDefaultValuePipe implements PipeTransform {
  transform(params: Parameter[], searchTerm: string): HttpData[] {
    if (!searchTerm) {
      return params;
    }
    return params.filter(param => ((param[2].toLowerCase().indexOf(searchTerm.toLowerCase()))) !== -1);
  }
}
