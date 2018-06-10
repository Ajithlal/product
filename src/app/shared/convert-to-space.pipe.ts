import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name : 'convertToSpace'
})

export class ConvertToSpace implements PipeTransform {
  transform(value, character) {
    return value.replace(character, ' ');
  }
}

