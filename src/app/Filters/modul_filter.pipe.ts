import {Pipe, PipeTransform} from '@angular/core';

import { mapTo, delay } from 'rxjs/operators';
import {Parameter} from '../Models/parameter';
import {moduleEntity_bak} from '../Models/moduleEntity_bak';

@Pipe({
  name: 'modul_filter'
})

export class Modul_filterPipe implements PipeTransform {
  transform(params: moduleEntity_bak[], searchTerm: string): moduleEntity_bak[] {
    if (!searchTerm) {
      return params;
    }
    return params.filter(param => ((param.module_name.toLowerCase().indexOf(searchTerm.toLowerCase()))) !== -1);
  }
}
