import { Pipe, PipeTransform } from '@angular/core';

export interface Colors {
  color: string;
  background: string;
}

@Pipe({
  name: 'colorsTheme'
})
export class ColorsThemePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): Colors {
    value = value?.toLowerCase();
    switch (value) {
      case 'basic':return {color: '#000', background:'#FFF' };
      case 'primary':return {color: '#FFF', background:'#3f51b5' };
      case 'accent':return {color: '#FFF', background:'#ff4081' };
      case 'warn':return {color: '#FFF', background:'#f44336' };
      case 'disabled':return {color: '#00000042', background:'#0000001f' };
      // default:return {color: '#FFF', background:'#3f51b5' };
        
    }
    return {color: '#FFF', background:'#3f51b5' };
  }

}
