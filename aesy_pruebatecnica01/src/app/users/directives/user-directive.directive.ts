import { Directive, ElementRef, Input } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[appUserDirective]',
  standalone:true
})
export class UserDirectiveDirective {

  @Input() set hasInputErros(value:boolean){
    if(this.inputSearchElemente == undefined) return;
    this.inputSearchElemente.nativeElement.style.borderColor=value?"red":"green";
  };
  @Input() set showInputErros(erros:ValidationErrors | null | undefined){
    if(this.inputSearchElemente == undefined) return;
    if(erros==null || erros==undefined)this.inputSearchElemente.nativeElement.innerHTML="todo ok";  
    else if(erros['inputEmpty']!=null && erros['inputEmpty']==true) this.inputSearchElemente.nativeElement.innerHTML="Input can not be empty";
    else if(erros['inputLess4char']!=null && erros['inputLess4char']==true) this.inputSearchElemente.nativeElement.innerHTML="Input must be min 4 characters";
    else if(erros['inputequalsMariogiron']!=null && erros['inputequalsMariogiron']==true) this.inputSearchElemente.nativeElement.innerHTML="Input can not be mariogiron";
    else this.inputSearchElemente.nativeElement.innerHTML="todo ok";
  };
  private inputSearchElemente?: ElementRef<HTMLElement>;
  constructor(private _inputSearchElemente?: ElementRef<HTMLElement>) {
    this.inputSearchElemente=_inputSearchElemente;
  }
}
