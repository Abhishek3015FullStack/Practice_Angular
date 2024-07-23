import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCustomDirectives]'
})
export class CustomDirectivesDirective {

  constructor(private element:ElementRef,private renderer:Renderer2) 
  {

  }

  @HostBinding('style.backgroundColor') color:string="red";

  @HostListener('mouseenter') onMouseEnter()
  {
    this.renderer.setStyle(this.element.nativeElement,"color","blue");
    this.color="white";
  }
  @HostListener('mouseleave') onMouseLeave()
  {
    this.renderer.setStyle(this.element.nativeElement,'color','black');
    this.color="yellow"
  }
  
}
