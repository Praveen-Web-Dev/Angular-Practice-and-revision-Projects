import { Component } from '@angular/core';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css']
})
export class SubscriptionComponent {
  isSubscribed = false;
  subscription='Subscribe'

  onSubscribe(){
    this.isSubscribed = !this.isSubscribed;
    this.isSubscribed? this.subscription="Subscribed": this.subscription="Subscribe"
  }
}
