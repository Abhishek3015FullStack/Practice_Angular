import { Component ,Input} from '@angular/core';

@Component({
  selector: 'app-example-of-content-checked-child',
  templateUrl: './example-of-content-checked-child.component.html',
  styleUrls: ['./example-of-content-checked-child.component.css']
})
export class ExampleOfContentCheckedChildComponent {

  @Input() name:string;

  ngAfterContentChecked(): void 
  {
    console.log("data is chaneged");
  }
  ngDoCheck(): void 
  {

  }


}
