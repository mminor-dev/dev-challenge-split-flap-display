import { Pipe, PipeTransform } from '@angular/core';

import { CHARS } from './char-map';

@Pipe({ name: 'sfCharDisplay', standalone: true })
export class SplitFlapCharDisplayPipe implements PipeTransform {
  transform(idx = -1): string {
    return CHARS[idx] ?? '🖕';
  }
}
