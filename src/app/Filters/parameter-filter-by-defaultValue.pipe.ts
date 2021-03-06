import {Pipe, PipeTransform} from '@angular/core';
import { HttpData} from '../OutData';

import { mapTo, delay } from 'rxjs/operators';
import {Parameter} from '../Models/parameter';
import {of} from 'rxjs';

@Pipe({
  name: 'paramFilterByDefaultValue'
})

export class ParameterFilterByDefaultValuePipe implements PipeTransform {
  transform(params: HttpData[], searchTerm: string): HttpData[] {
    if (params != null) {
      for (let i = 0; i < params.length ; i++)
       if (params[i][2] == null) {
          params[i][2] = ' ';
        }
      if (!searchTerm) {
        return params;
      }
      return params.filter(param => ((param[2].toLowerCase().indexOf(searchTerm.toLowerCase()))) !== -1);
    }
  }
}


