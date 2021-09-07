import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[ui-ripple]'
})
export class UiRippleDirective {
  width: number;
  height: number;
  left: number;
  top: number;
  x: number;
  y: number;
  cursorX: number;
  cursorY: number;
  magneticPullX: number;
  magneticPullY: number;
  isHovering: boolean;

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.width = this.el.nativeElement.offsetWidth;
    this.height = this.el.nativeElement.offsetHeight;
    this.left = this.el.nativeElement.offsetLeft;
    this.top = this.el.nativeElement.offsetTop;
    this.x = 0;
    this.y = 0;
    this.cursorX = 0;
    this.cursorY = 0;
    this.magneticPullX = 0.4;
    this.magneticPullY = 0.9;
    this.isHovering = false;
    renderer.setStyle(this.el.nativeElement, 'overflow', 'hidden');
    renderer.setStyle(this.el.nativeElement, 'position', 'relative');
  }


  @HostListener('click', ['$event'])
  onClick(e: any) {
    // console.log(e);
    const circle = this.renderer.createElement('span');
    const diameter = Math.max(
      this.el.nativeElement.clientWidth,
      this.el.nativeElement.clientHeight
    );

    const radius = diameter / 2;

    const offsetLeft = this.left + this.x * this.magneticPullX;
    const offsetTop = this.top + this.y * this.magneticPullY;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${this.cursorX - offsetLeft - radius}px`;
    circle.style.top = `${this.cursorY - offsetTop - radius}px`;
    circle.classList.add('ripple');

    const ripple = this.el.nativeElement.getElementsByClassName('ripple')[0];

    if (ripple) {
      ripple.remove();
    }
    this.renderer.appendChild(this.el.nativeElement, circle);

    this._removeRippleClasses(circle);
  }


  @HostListener('mousemove', ['$event'])
  onMouseMove(e: any) {
    // console.log(e.offsetX);
    // this.cursorX = e.clientX;
    // this.cursorY = e.clientY;


    // const center = {
    //   x: this.left + this.width / 2,
    //   y: this.top + this.height / 2
    // };

    this.cursorX = e.offsetX;
    this.cursorY = e.offsetY;

    const diameter = Math.max(
      this.el.nativeElement.clientWidth,
      this.el.nativeElement.clientHeight
    );

    const center = {
      x: this.el.nativeElement.clientWidth / 2,
      y: this.el.nativeElement.clientHeight / 2
    };
    // console.log(center);

    this.x = this.cursorX - center.x;
    this.y = this.cursorY - center.y;

    const distance = Math.sqrt(this.x * this.x + this.y * this.y);
    const hoverArea = this.isHovering ? 0.6 : 0.5;

    if (distance < this.width * hoverArea) {
      if (!this.isHovering) {
        this.isHovering = true;
      }
      // this.onEnter();
    } else {
      if (this.isHovering) {
        // this.onLeave();
        this.isHovering = false;
      }
    }
  }



  _removeRippleClasses($div: any) {
    setTimeout((
      () => {
        this.renderer.removeClass($div, 'myripple');
        setTimeout((
          () => {
            if ($div.parentNode === this.el.nativeElement) {
              this.renderer.removeChild(this.el.nativeElement, $div);
            }
          }));
      }), 1000);
  }

}
