import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[numberCharacter]'
})
export class NumberCharacterDirective {
  private elh: HTMLInputElement;
  regexStr = '^[a-zA-Z0-9_]*$';
  constructor(private el:ElementRef,) {
    
  }  
   @HostListener('keydown',['$event']) enter(event){
    let e = <KeyboardEvent> event;  
    // console.log(e.keyCode)
    switch(e.keyCode){
      case 32:
        return false;     
    }
    if(e.key == '_'){
      return false
    }
      if (e.keyCode > 31 && (e.keyCode < 48 || e.keyCode > 57)) {
        return false;
      }
      return true;
    }  
    @HostListener('keypress', ['$event']) onKeyPress(event) {
      return new RegExp(this.regexStr).test(event.key);
    }
  
    @HostListener('paste', ['$event']) blockPaste(event: KeyboardEvent) {
      this.validateFields(event);
    }
  
    validateFields(event) {
      setTimeout(() => {
  
        this.el.nativeElement.value = this.el.nativeElement.value.replace(/[^A-Za-z ]/g, '').replace(/\s/g, '');
        event.preventDefault();
  
      }, 100)
    }
}
