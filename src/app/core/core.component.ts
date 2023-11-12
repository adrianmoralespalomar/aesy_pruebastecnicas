import { Component, OnInit } from '@angular/core';
import { UsersComponent } from '../users/users.component';
@Component({
  selector: 'app-core',
  template: `
  <main class="w-full min-h-screen h-auto bg-black text-white">
    <app-users/>
  </main>`,
  standalone:true,
  imports: [UsersComponent]
})
export class CoreComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
