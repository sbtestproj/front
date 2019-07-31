import {Pipe, PipeTransform} from '@angular/core';
import { HttpData} from '../OutData';

import { mapTo, delay } from 'rxjs/operators';
import {Parameter} from '../Models/parameter';

@Pipe({
  name: 'paramFilter'
})

export class ParameterFilterPipe implements PipeTransform {
  transform(params: HttpData[], searchTerm: string): HttpData[] {
    if (!searchTerm) {
      return params;
    }
    return params.filter(param => ((param.name.toLowerCase().indexOf(searchTerm.toLowerCase()))) !== -1);
  }
}
