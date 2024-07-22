import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { ParentContentChildExampleComponent } from './container/parent-content-child-example/parent-content-child-example.component';
import { ParentContentChildExampleChildComponent } from './container/parent-content-child-example/parent-content-child-example-child/parent-content-child-example-child.component';
import { NgDestoryExampleComponent } from './container/ng-destory-example/ng-destory-example.component';
import { NgDestroyChildComponent } from './container/ng-destory-example/ng-destroy-child/ng-destroy-child.component';
import { ExampleOfDirectivesComponent } from './container/example-of-directives/example-of-directives.component';
import { ParagraphColorDirective } from './CustomDirectives/paragraph-color.directive';
import { ExampleOfNgOnInitComponent } from './container/example-of-ng-on-init/example-of-ng-on-init.component';
import { ExampleOfNgOnInitChildComponent } from './container/example-of-ng-on-init/example-of-ng-on-init-child/example-of-ng-on-init-child.component';
import { ExampleOfContentAfterInitComponent } from './container/example-of-content-after-init/example-of-content-after-init.component';
import { ExampleOfContentAfterInitChildComponent } from './container/example-of-content-after-init/example-of-content-after-init-child/example-of-content-after-init-child.component';
import { ExampleOfContentCheckedComponent } from './container/example-of-content-checked/example-of-content-checked.component';
import { ExampleOfContentCheckedChildComponent } from './container/example-of-content-checked/example-of-content-checked-child/example-of-content-checked-child.component';
import { FormsModule } from '@angular/forms';
import { ExampleNgDoCheckComponent } from './container/example-ng-do-check/example-ng-do-check.component';
import { ExampleNgDoCheckChildComponent } from './container/example-ng-do-check/example-ng-do-check-child/example-ng-do-check-child.component';



@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    ParentContentChildExampleComponent,
    ParentContentChildExampleChildComponent,
    NgDestoryExampleComponent,
    NgDestroyChildComponent,
    ExampleOfDirectivesComponent,
    ParagraphColorDirective,
    ExampleOfNgOnInitComponent,
    ExampleOfNgOnInitChildComponent,
    ExampleOfContentAfterInitComponent,
    ExampleOfContentAfterInitChildComponent,
    ExampleOfContentCheckedComponent,
    ExampleOfContentCheckedChildComponent,
    ExampleNgDoCheckComponent,
    ExampleNgDoCheckChildComponent,
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
