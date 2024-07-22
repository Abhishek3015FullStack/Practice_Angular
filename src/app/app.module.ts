import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { ParentContentChildExampleComponent } from './container/parent-content-child-example/parent-content-child-example.component';
import { ParentContentChildExampleChildComponent } from './container/parent-content-child-example/parent-content-child-example-child/parent-content-child-example-child.component';
import { NgDestoryExampleComponent } from './container/ng-destory-example/ng-destory-example.component';
import { NgDestroyChildComponent } from './container/ng-destory-example/ng-destroy-child/ng-destroy-child.component';





@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    ParentContentChildExampleComponent,
    ParentContentChildExampleChildComponent,
    NgDestoryExampleComponent,
    NgDestroyChildComponent,
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
