import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-example-of-content-checked',
  templateUrl: './example-of-content-checked.component.html',
  styleUrls: ['./example-of-content-checked.component.css']
})
export class ExampleOfContentCheckedComponent {

  name:string=""

  Onchange(event:any)
  {
    this.name=(event.target.value)
    
  }
}
