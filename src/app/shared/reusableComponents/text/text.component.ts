import { Component, Input } from '@angular/core';
import { NgSwitch, NgSwitchCase } from "../../../../../node_modules/@angular/common/common_module.d-NEF7UaHr";

@Component({
  selector: 'app-text',
  imports: [NgSwitch, NgSwitchCase],
  templateUrl: './text.component.html',
  styleUrl: './text.component.scss'
})
export class TextComponent {
  @Input() content: string = '';
  @Input() type: 'paragraph' | 'heading' | 'label' = 'paragraph';
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Input() bold: boolean = false;
  @Input() italic: boolean = false;


  getClasses(){
    
  }


}