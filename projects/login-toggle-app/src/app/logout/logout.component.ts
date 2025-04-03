import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {
@Output() onLogout = new EventEmitter();

logout(){
  this.onLogout.emit();
}
}
