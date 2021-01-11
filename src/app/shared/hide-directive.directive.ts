import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHideDirective]'
})
export class HideDirective{
  @HostBinding('class.open') isOpen = false;

  constructor() { }

  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
  }

}