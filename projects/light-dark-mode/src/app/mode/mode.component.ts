import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-mode',
  templateUrl: './mode.component.html',
  styleUrls: ['./mode.component.css']
})
export class ModeComponent {
  @Output() toggle = new EventEmitter<void>();

  onToggleMode():void{
    this.toggle.emit();
  }
}
