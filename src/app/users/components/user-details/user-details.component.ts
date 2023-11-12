import { Component, OnInit, inject } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { ActivatedRoute } from '@angular/router';
import { UserModel } from '../../models/UserModel';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-user-details',
  template: `<p>this is user details {{userLog}}</p> <img [src]="userAv" alt="">`,
  standalone:true,
  imports:[JsonPipe]
})
export class UserDetailsComponent implements OnInit {
  userService = inject(UsersService);
  routesService = inject(ActivatedRoute);
  userLog?:string;
  userAv?:string;
  constructor() { 
    this.routesService.queryParams.subscribe((params:any)=>{
      const {userlogin, avatarUrl} = params;
      this.userLog=userlogin || '';
      this.userAv=avatarUrl;
    });
  }

  ngOnInit() {

  }

}
