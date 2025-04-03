import {  Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  isLogin:boolean= false
  DisplayMessage:string="Please Login"



  toggleLogin(){
    this.isLogin = !this.isLogin
    this.DisplayMessage = this.isLogin ? "Welcome User" : "Please Login";

  }


  

}
