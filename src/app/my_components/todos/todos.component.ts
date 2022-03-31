import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos:Todo[];
  constructor() { 
    this.todos = [
      {
        sno:1,
        title:"thisi is title",
        desc: "Description",
        active:true
      },
      {
        sno:2,
        title:"thisi is title 2",
        desc: "Description 2",
        active:true
      },
      {
        sno:3,
        title:"thisi is title 3 ",
        desc: "Description 3",
        active:true
      }
    ]
  }

  ngOnInit(): void {
  }
  deleteTodo(todo:Todo){
    console.log("todo");
    const index=this.todos.indexOf(todo);
    this.todos.splice(index,1);
  }

}
