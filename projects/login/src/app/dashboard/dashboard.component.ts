import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  isLoggedIn = false;
  LoggedText ="User Logged Out"

  onLoggedOut(){
    this.isLoggedIn=false
    this.isLoggedIn? this.LoggedText="User Logged In": this.LoggedText="User Logged Out";
    
  }
  onLoggedIn(login:boolean){
    this.LoggedText=login?"User Logged In":"User Logged Out";
      }
}
