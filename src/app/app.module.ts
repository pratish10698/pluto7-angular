import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { TodosComponent } from './my_components/todos/todos.component';
import { TodoItemComponent } from './my_components/todo-item/todo-item.component';
import { AddTodoComponent } from './my_components/add-todo/add-todo.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    TodosComponent,
    TodoItemComponent,
    AddTodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
