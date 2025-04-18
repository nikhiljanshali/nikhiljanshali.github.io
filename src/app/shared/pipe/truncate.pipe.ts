import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(value: string, limit = 100, completeWords = false, ellipsis = '...'): string {
    if (completeWords) {
      limit = value.substr(0, limit).lastIndexOf(' ');
    }
    const truncatedText = value.length > limit ? value.substr(0, limit) + ellipsis : value;
    return truncatedText;
  }

}
