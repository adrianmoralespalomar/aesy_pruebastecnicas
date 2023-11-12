import { Injectable } from "@angular/core";
import { FormControl, ValidationErrors } from "@angular/forms";

@Injectable({providedIn:'root'})
export class UsersValidator {
    public ValidateInput(searchInputControl:FormControl):ValidationErrors | null{
        const searchInput = searchInputControl?.value?.trim()?.toLowerCase();
        if(!searchInput) return {inputEmpty:true};
        else if (searchInput?.length<4) return {inputLess4char:true};
        else if (searchInput=='mariogiron') return {inputequalsMariogiron:true};
        else return null;
    }
}
