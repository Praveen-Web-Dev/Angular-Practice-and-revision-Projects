import { Component } from '@angular/core';

@Component({
  selector: 'app-show-hide',
  templateUrl: './show-hide.component.html',
  styleUrls: ['./show-hide.component.css']
})
export class ShowHideComponent {
  showFirstName:boolean=false;
  showLastName:boolean=false;

  toggleFirstName(){
    this.showFirstName =! this.showFirstName;
  }
  toggleLastName(){
    this.showLastName = !this.showLastName;
  }

}
