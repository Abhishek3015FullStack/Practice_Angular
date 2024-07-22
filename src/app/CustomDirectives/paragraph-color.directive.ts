import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appParagraphColor]'
})
export class ParagraphColorDirective {

  constructor(private element:ElementRef,private renderer:Renderer2) 
  {

  }
  @HostBinding('style.color') color :string="yellow"

  @HostListener('mouseenter')  onMouseEnter()
  {
    this.color="blue"; 
    this.renderer.addClass(this.element.nativeElement,'bg-danger')
  }

  @HostListener('mouseleave')  onMouseLeave()
  {
    this.color="red" 
    this.renderer.removeClass(this.element.nativeElement,'bg-danger')
  }
}
