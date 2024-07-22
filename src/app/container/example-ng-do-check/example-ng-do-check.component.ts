import { Component } from '@angular/core';

@Component({
  selector: 'app-example-ng-do-check',
  templateUrl: './example-ng-do-check.component.html',
  styleUrls: ['./example-ng-do-check.component.css']
})
export class ExampleNgDoCheckComponent 
{

  name:string[] =['Abhishek','Pankaj','Jain']
  iteration:number;
  name1 :string;
  ngOnInit(): void 
  {

    this.iteration=0;
    this.name1 = this.name[this.iteration];

  }

  
  Increment()
  {
   
      this.iteration=this.iteration+1;
      if(this.iteration<3)
      {
      this.name1 = this.name[this.iteration];
      console.log(this.iteration);
      }
      else
      {
        this.iteration=0;
        this.name1 = this.name[this.iteration];
        console.log(this.iteration);
      }
  }

}
