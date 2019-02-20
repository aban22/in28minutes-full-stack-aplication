import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router } from '@angular/router';

export class Todo {
  constructor(public id: number, public description: string, public done: boolean, public targetDate: Date) {

  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos: Todo[];
  message: string;

  constructor(
    private todoDataService: TodoDataService,
    private router: Router) { }

  ngOnInit() {
    this.refreshTodos();
  }

  refreshTodos() {
    this.todoDataService.retrieveAllTodos('in28minutes').subscribe(
      response => {
        this.todos = response;
      },
      error => {

      }
    );
  }

  deleteTodo(id) {
    this.todoDataService.deleteTodo('in28minutes', id).subscribe(
      response => {
        this.message = `Delete of Todo ${id} Succesful!`;
        this.refreshTodos();
      },
      error => {

      }
    );
  }

  updateTodo(id) {
    this.router.navigate(['todos', id]);
  }

  addTodo() {
    this.router.navigate(['todos', -1]);
  }
}
