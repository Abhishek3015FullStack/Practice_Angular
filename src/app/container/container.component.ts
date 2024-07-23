import { Component } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent {

  selectedData :string="";
  ChagingDaata(event:any)
  {
    this.selectedData =event;
    console.log(event+"conatiner is called")
  }

  selectedDateWrong:string="";

  ChnageData1(event)
  {
    this.selectedDateWrong = event;
  }
  
}
