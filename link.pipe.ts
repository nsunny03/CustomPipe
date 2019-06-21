import { Pipe, PipeTransform } from '@angular/core';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';

@Pipe({
  name: 'link'
})
export class LinkPipe implements PipeTransform {

  transform(value: any, args?: any): any {
   return value.replace(/digitallync/gi, '<a href=https://digital-lync.com/>DL</a>');
  }

}
