import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchPractice'
})
export class SearchPracticePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }
  
}
