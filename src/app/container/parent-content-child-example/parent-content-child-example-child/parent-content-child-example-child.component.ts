import { Component, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-parent-content-child-example-child',
  templateUrl: './parent-content-child-example-child.component.html',
  styleUrls: ['./parent-content-child-example-child.component.css']
})
export class ParentContentChildExampleChildComponent {

  @ContentChild('Header') InputelementHeader:ElementRef;
  onClickEventHappens()
  {

    console.log(this.InputelementHeader.nativeElement.innerHTML);
  }


}
