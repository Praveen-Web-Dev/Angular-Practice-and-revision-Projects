import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
@Output() onLogin = new EventEmitter();

login(){
  this.onLogin.emit();
}
}
