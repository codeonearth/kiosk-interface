import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  imports: [],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.scss'
})
export class DropdownComponent {
  @Input() options: string[] = [];
  @Input() label: string = '';
  @Input() selected: string = '';
  @Input() disabled: boolean = false;
  
  @Output() selectedChange = new EventEmitter<string>();

  onSelect(event: Event): void {
    const select = event.target as HTMLSelectElement;
    this.selected = select.value;
    this.selectedChange.emit(this.selected);
  }
}