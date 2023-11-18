import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { TextInputFormValidator } from './validators/login-validator-textinput';
import { JsonPipe } from '@angular/common';
import { LoginDirectiveCustom } from './directives/login-directive';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  standalone:true,
  imports:[ReactiveFormsModule, JsonPipe,LoginDirectiveCustom]
})
export class LoginComponent implements OnInit {

  formbuilder= inject (FormBuilder);
  textInputFormValidator = inject(TextInputFormValidator);
  customForm=this.formbuilder.group({
    username:['',null,[this.textInputFormValidator]],
    password:['',null,[this.textInputFormValidator]]
  })
  constructor() { }

  ngOnInit() {
  }

}
