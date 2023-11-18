import { Directive, ElementRef, Input, OnInit, inject } from "@angular/core";
import { ValidationErrors } from "@angular/forms";
import { Observable } from "rxjs";
import { TextInputFormValidatorInterface } from "../validators/login-validator-textinput";

@Directive({
    selector:'[loginDirectiveCustom]',
    standalone:true
})
export class LoginDirectiveCustom implements OnInit{
    @Input() set setColorBorder (hasError:ValidationErrors | null | undefined){
        if (!hasError) return;
        if(hasError['inputNot3length']==true)this.htmlElement.nativeElement.style="border: 2px solid red"
        else this.htmlElement.nativeElement.style="border: 2px solid green"
    }
    htmlElement = inject (ElementRef<HTMLElement>)
    constructor(){}
    ngOnInit(): void {
        
    }
    ngOnDestroy(){
        
    }
    
}