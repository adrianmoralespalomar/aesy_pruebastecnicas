import { Injectable } from "@angular/core";
import { AbstractControl, AsyncValidator, ValidationErrors } from "@angular/forms";
import { Observable, of } from "rxjs";

export interface TextInputFormValidatorInterface{
    inputNot3length:boolean
}
@Injectable({providedIn:'root'})
export class TextInputFormValidator implements AsyncValidator{
    validate(control: AbstractControl):Observable<ValidationErrors | null>{
        const inputTextValue = control?.value;
        let result:Observable<ValidationErrors>=of({ inputNot3length:false});
        if(inputTextValue?.length<3){
            result = of({
                inputNot3length:true
            })
        }
        return result;
    }
}