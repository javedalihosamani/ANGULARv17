import { Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[scrollToTop]',
  standalone: true
})
export class ScrollToTopDirective {
    constructor(private el: ElementRef){}

    @HostListener('click') onClick(){
        window.scrollTo({top:0, behavior:'smooth'});
    }
}