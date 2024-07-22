import { Component } from '@angular/core';

@Component({
  selector: 'app-example-of-content-after-init-child',
  templateUrl: './example-of-content-after-init-child.component.html',
  styleUrls: ['./example-of-content-after-init-child.component.css']
})
export class ExampleOfContentAfterInitChildComponent {

  name:string="Abhishek"
  
  ngAfterContentInit(): void {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.
    console.log('ngAfterContentInit');
  }
}
