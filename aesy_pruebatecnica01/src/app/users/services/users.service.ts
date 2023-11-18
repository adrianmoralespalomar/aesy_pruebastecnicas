import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { GitUserModel, UserModel } from '../models/UserModel';
import { UsersConstants } from 'src/app/shared/constants/users.constant';
import { BehaviorSubject, Observable, map, switchMap, take, tap } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class UsersService {

  currentUsers$=new BehaviorSubject<UserModel []>([]);
  http=inject (HttpClient);
  constructor() { }

  GetUsersData(searchInput:string){
    const parametros = new HttpParams().set('q',searchInput);
    this.http.get<GitUserModel>(`${UsersConstants.githubUrlUsers}`,{params:parametros}).pipe(
      map(({items})=>items.slice(0,3))
    ).subscribe((result)=>this.currentUsers$.next(result));
    // this.http.get<GitUserModel>(`${UsersConstants.githubUrlUsers}?q=${searchInput}`).pipe(
    //   map(({items})=>items.slice(0,3))
    // ).subscribe((result)=>this.currentUsers$.next(result));
  }

}