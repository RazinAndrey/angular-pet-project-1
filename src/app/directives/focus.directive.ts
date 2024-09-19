import { AfterViewInit, Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appFocus]',
  standalone: true
})

export class FocusDirective {

  constructor(private el: ElementRef,  private renderer: Renderer2) {}

  // ngOnInit(): void {
  //   this.el.nativeElement.focus();
  // }

  @HostListener('focus') onFocus() {
    this.el.nativeElement.style.outline = '1px solid white'; // Выделение элемента
  }

  @HostListener('blur') onBlur() {
    this.el.nativeElement.style.outline = 'none'; // Убираем выделение
  }

}
