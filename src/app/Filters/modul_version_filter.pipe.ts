import {Pipe, PipeTransform} from '@angular/core';
import {moduleVersionsEntity} from '../Models/Entities/moduleVersions';

@Pipe({
  name: 'modul_version_filter'
})

export class Modul_version_filterPipe implements PipeTransform {
  transform(params: moduleVersionsEntity[], searchTerm: string): moduleVersionsEntity[] {
    if (!searchTerm) {
      return params;
    }
    return params.filter(param => ((param.version_number.toLowerCase().indexOf(searchTerm.toLowerCase()))) !== -1);
  }
}
