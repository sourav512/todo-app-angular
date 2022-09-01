import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/service/todo.service';
import { Todo } from "./../../model/Todo";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-completed-task',
  templateUrl: './completed-task.component.html',
  styleUrls: ['./completed-task.component.css']
})
export class CompletedTaskComponent implements OnInit {
  todo ?: Todo[];
  faTrashAlt = faTrashAlt;
  constructor(private completeTodo:TodoService) {
    this.completeTodo.getCompletedTodos().subscribe(todo=>{this.todo = todo})
   }
   handleDelete(todo:Todo){
    this.completeTodo.deleteCompletedTod(todo);
   }
  ngOnInit(): void {
  }

}
