import {Pipe, PipeTransform} from '@angular/core';
import { HttpData} from '../OutData';

import { mapTo, delay } from 'rxjs/operators';
import {Parameter} from '../Models/parameter';

@Pipe({
  name: 'paramFilterByDevice'
})

export class ParameterFilterByDevicePipe implements PipeTransform {
  transform(params: any, searchTerm: string): HttpData[] {
    //   if (!searchTerm) {
    //     return params;
    //   }
    //   return params.filter(param => ((param[4].toLowerCase().indexOf(searchTerm.toLowerCase()))) !== -1);
    // }
    if (params != null) {
      for (let i = 0; i < params.length; i++)
        if (params[i][4] == null) {
          params[i][4] = ' ';
        }
      if (!searchTerm) {
        return params;
      }
      return params.filter(param => ((param[4].toLowerCase().indexOf(searchTerm.toLowerCase()))) !== -1);
    }
  }
}
