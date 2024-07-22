import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-example-ng-do-check-child',
  templateUrl: './example-ng-do-check-child.component.html',
  styleUrls: ['./example-ng-do-check-child.component.css']
})
export class ExampleNgDoCheckChildComponent {
@Input() name:string;

ngDoCheck(): void {
  //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
  //Add 'implements DoCheck' to the class.
  console.log('ngDoCheck');
}
}
