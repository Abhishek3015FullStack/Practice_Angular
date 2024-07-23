import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-example-sibblings4',
  templateUrl: './example-sibblings4.component.html',
  styleUrls: ['./example-sibblings4.component.css']
})
export class ExampleSibblings4Component {

  @Input()selectedDateWrong:string;
}
