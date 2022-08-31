import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Todo } from "./../model/Todo";

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos:Todo[];
  constructor() {
    this.todos = [
      {
        id:'111',
        title: "learn c++",
        isComplete: true,
        date: new Date()
      },
      {
        id:'333',
        title: "learn c",
        isComplete: false,
        date: new Date()
      }
    ]
   }

   getTodos = ()=>{
    
    return of(this.todos)
   }
   
   addTodod(todo: Todo){
    this.todos.push(todo);
   }

   changeStatus(todo:Todo){
    this.todos.map(e=>{
      if(e.id==todo.id){
        e.isComplete = !e.isComplete
      }
    })
   }

   deleteTodo(todo:Todo){
    const indexOfTodo = this.todos.findIndex((currentObj)=>currentObj.id===todo.id);
    this.todos.splice(indexOfTodo,1);
   }
}
