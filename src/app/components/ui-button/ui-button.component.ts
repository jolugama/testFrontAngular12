import { AfterContentInit, AfterViewInit, Component, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { ColorsThemePipe, Colors } from 'src/app/pipes/colors-theme.pipe';

@Component({
  selector: 'ui-button',
  templateUrl: './ui-button.component.html',
  styleUrls: ['./ui-button.component.scss'],
  providers: [ColorsThemePipe]
})
export class UiButtonComponent implements OnInit, AfterContentInit {
  @Input() color!: string;
  @Input() disabled: boolean = false;
  colors!: Colors;

  constructor(private colorTheme: ColorsThemePipe, private renderer: Renderer2, private el: ElementRef) {
  }

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
    this.colors = this.colorTheme.transform(this.color);
  }


}
