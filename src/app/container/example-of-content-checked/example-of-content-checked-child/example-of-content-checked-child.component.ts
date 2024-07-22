import { Component ,Input} from '@angular/core';

@Component({
  selector: 'app-example-of-content-checked-child',
  templateUrl: './example-of-content-checked-child.component.html',
  styleUrls: ['./example-of-content-checked-child.component.css']
})
export class ExampleOfContentCheckedChildComponent {

  @Input() name:string;

  ngAfterContentChecked(): void {
    //Called after every check of the component's or directive's content.
    //Add 'implements AfterContentChecked' to the class.
    console.log("data is chaneged");
  }
  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
    
  }


}
