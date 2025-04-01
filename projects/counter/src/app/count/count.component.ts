import { Component } from '@angular/core';

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.css']
})
export class CountComponent {
  count=0
  ErrorMessage='';

  increment(){
    if(this.count>=0){
      this.count++;
      this.ErrorMessage='';
    }
    
  }

  decrement(){
    if(this.count>0){this.count--}
    else{
      this.ErrorMessage="You are trying to count Negative Values."
    }
  }
}
