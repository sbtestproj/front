import {Pipe, PipeTransform} from '@angular/core';

import { mapTo, delay } from 'rxjs/operators';
import {Parameter} from '../Models/parameter';

@Pipe({
  name: 'paramFilter_id'
})

export class ParameterFilterByidPipe implements PipeTransform {
  transform(params: Parameter[], searchTerm: string): Parameter[] {
    if (!searchTerm) {
      return params;
    }
    return params.filter(param => ((param[0].toString().toLowerCase().indexOf(searchTerm.toLowerCase()))) !== -1);
  }
}
