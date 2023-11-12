import { Component, ElementRef, OnInit, ViewChild, inject } from '@angular/core';
import { UsersService } from './services/users.service';
import { AsyncPipe, JsonPipe, NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UsersValidator } from './validators/users-validator';
import { UserDirectiveDirective } from './directives/user-directive.directive';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  standalone:true,
  imports:[NgFor, NgIf, AsyncPipe, JsonPipe,RouterLink,ReactiveFormsModule,UserDirectiveDirective]
})
export class UsersComponent implements OnInit {

  @ViewChild('inputSearch')
  inputSearch?:ElementRef <HTMLInputElement>;
  userService = inject(UsersService);
  formService = inject(FormBuilder);
  validatorervice = inject(UsersValidator);
  formCustom=this.formService.group({
    inputSearchForm:[null,this.validatorervice.ValidateInput]
  })
  constructor() { }

  ngOnInit() {
    
  }
  GetUsersData(){
    this.userService.GetUsersData(this.inputSearch?.nativeElement?.value?.toString() || '');
  }

}
