import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Todo } from "./../model/Todo";

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos:Todo[];
  completedTodos:Todo[];
  constructor() {
    this.completedTodos = []
    this.todos = []
   }

   getTodos = ()=>{
    
    return of(this.todos)
   }
   getCompletedTodos = ()=>{
    
    return of(this.completedTodos)
   }
   
   addTodo(todo: Todo){
    this.todos.push(todo);
   }

   changeStatus(todo:Todo){
    const indexOfTodo = this.todos.findIndex((currentObj)=>currentObj.id===todo.id);
    let completedTodo = this.todos.splice(indexOfTodo,1);
    this.completedTodos.push(todo);

   }

   deleteTodo(todo:Todo){
    const indexOfTodo = this.todos.findIndex((currentObj)=>currentObj.id===todo.id);
    this.todos.splice(indexOfTodo,1);
   }

   deleteCompletedTod(todo:Todo){
    const indexOfTodo = this.completedTodos.findIndex((currentObj)=>currentObj.id===todo.id);
    this.completedTodos.splice(indexOfTodo,1);
   }
}
