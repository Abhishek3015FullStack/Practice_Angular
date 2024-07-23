import { Component, ElementRef, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-example-sibblings3',
  templateUrl: './example-sibblings3.component.html',
  styleUrls: ['./example-sibblings3.component.css']
})
export class ExampleSibblings3Component {

  selectedComponent:string="Abhishek"

  @Output() inputData= new EventEmitter<string>();
  // @Output() scrollSetting=new EventEmitter<ScrollSetting>();

  onChnageData(abhisek:string)
  {
    this.inputData.emit(abhisek);
  }
}
