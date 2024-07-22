import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-example-of-ng-on-init-child',
  templateUrl: './example-of-ng-on-init-child.component.html',
  styleUrls: ['./example-of-ng-on-init-child.component.css']
})
export class ExampleOfNgOnInitChildComponent {

  @Input() item:string;
}
