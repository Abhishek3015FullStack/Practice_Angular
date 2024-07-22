import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-destory-example',
  templateUrl: './ng-destory-example.component.html',
  styleUrls: ['./ng-destory-example.component.css']
})
export class NgDestoryExampleComponent {

  name:string="Abhishek"
  isChecked:boolean=true;

  ClickForHideOrShow()
  {
    if(this.name=="Abhishek")
      this.name="dhruvik"

    else
    {
      this.name="Abhishek"

    }
  }
}
