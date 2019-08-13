import {Pipe, PipeTransform} from '@angular/core';
import { HttpData} from '../OutData';

import { mapTo, delay } from 'rxjs/operators';
import {Parameter} from '../Models/parameter';

@Pipe({
  name: 'paramFilterByDescription'
})

export class ParameterFilterByDescriptionPipe implements PipeTransform {
  transform(params: HttpData[], searchTerm: string): HttpData[] {
    if (params != null) {
      for (let i = 0; i < params.length ; i++)
      {
        if (params[i][3] == null){
          params[i][3] = ' ';
        }
      }
    }
    if (!searchTerm) {
      return params;
    }
    return params.filter(param => ((param[3].toLowerCase().indexOf(searchTerm.toLowerCase()))) !== -1);
  }
}
