import { Component } from '@angular/core';

@Component({
  selector: 'app-even-odd',
  templateUrl: './even-odd.component.html',
  styleUrls: ['./even-odd.component.css']
})
export class EvenOddComponent {
  count:number =0;
  displayText!:string
  

  randomNumGenerator(): number {
    return Math.ceil(Math.random() * 100);
  }

  increment():void{
   const randomNumGenerator = this.randomNumGenerator();
   this.count += randomNumGenerator;  
   this.count % 2==0? this.displayText="Even":this.displayText="Odd";
}

// get displayText(): string {
//   return this.count % 2 === 0 ? 'Even' : 'Odd';
// }

}
