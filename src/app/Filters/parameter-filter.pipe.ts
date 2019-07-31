import {Pipe, PipeTransform} from '@angular/core';

import { mapTo, delay } from 'rxjs/operators';
import {Parameter} from '../Models/parameter';

@Pipe({
  name: 'paramFilter'
})

export class ParameterFilterPipe implements PipeTransform {
  transform(params: Parameter[], searchTerm: string): Parameter[] {
    if (!searchTerm) {
      return params;
    }
    return params.filter(param => ((param.name.toLowerCase().indexOf(searchTerm.toLowerCase())))
      !== -1);
  }
}
