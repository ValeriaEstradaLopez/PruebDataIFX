import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(yearOfBirth: number ) {
    let date = new Date();
    let año = date.getFullYear();
     
      return año-yearOfBirth;
    
    
  }

}
