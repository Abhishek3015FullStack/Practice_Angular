import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-example-sibblings1',
  templateUrl: './example-sibblings1.component.html',
  styleUrls: ['./example-sibblings1.component.css']
})
export class ExampleSibblings1Component {
@Input() name:string;
}
