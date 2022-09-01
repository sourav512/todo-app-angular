import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './components/todos/todos.component';
import { TodoFormComponent } from './components/todo-form/todo-form.component';
import { HeaderComponent } from './layout/header/header.component';
import { FormsModule } from '@angular/forms';
import { CompletedTaskComponent } from './components/completed-task/completed-task.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoFormComponent,
    HeaderComponent,
    CompletedTaskComponent,
  ],
  imports: [
    FormsModule,
    FontAwesomeModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
