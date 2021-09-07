import { AfterContentInit, AfterViewInit, Component, ElementRef, EventEmitter, HostListener, Input, OnChanges, OnInit, Output, Renderer2, SimpleChanges } from '@angular/core';
import { ColorsThemePipe, Colors } from 'src/app/pipes/colors-theme.pipe';

@Component({
  selector: 'ui-button',
  templateUrl: './ui-button.component.html',
  styleUrls: ['./ui-button.component.scss'],
  providers: [ColorsThemePipe]
})
export class UiButtonComponent implements OnInit, AfterContentInit, OnChanges {
  @Input() color!: string;
  @Input() disabled: boolean = false;
  @Output() click = new EventEmitter();
  colors!: Colors;

  constructor(private colorTheme: ColorsThemePipe) {
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes.disabled.currentValue.length>0 && changes.disabled.previousValue) {
      this.disabled = changes.disabled.currentValue;
      this.changeColor();
    }
    if (changes.color.currentValue.length>0 && changes.color.previousValue) {
      this.color = changes.color.currentValue;
      this.changeColor();
    }
  }

  ngOnInit(): void {
  }


  ngAfterContentInit(): void {
    this.changeColor();
  }


  changeColor(){
    if (this.disabled) {
      this.colors = this.colorTheme.transform('disabled');
    } else {
      this.colors = this.colorTheme.transform(this.color);
    }
  }

}
