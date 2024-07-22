import { Component } from '@angular/core';

@Component({
  selector: 'app-example-of-ng-on-init',
  templateUrl: './example-of-ng-on-init.component.html',
  styleUrls: ['./example-of-ng-on-init.component.css']
})
export class ExampleOfNgOnInitComponent {

  name:string="Abhishek"
ngOnInit(): void 
  {
    this.name = "Abhishek Jain"
    console.log('ngOnInit called');
  }
}
