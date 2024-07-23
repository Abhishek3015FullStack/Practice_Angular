import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-example-sibblings2',
  templateUrl: './example-sibblings2.component.html',
  styleUrls: ['./example-sibblings2.component.css']
})
export class ExampleSibblings2Component {


@Output() name =new EventEmitter<any>();
OnChange(event:string)
{
this.name.emit(event)
console.log(event)
}
}
