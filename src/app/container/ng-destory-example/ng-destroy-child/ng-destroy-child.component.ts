import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-destroy-child',
  templateUrl: './ng-destroy-child.component.html',
  styleUrls: ['./ng-destroy-child.component.css']
})
export class NgDestroyChildComponent {

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    console.log("ngOnDestroy called");
  }
}
