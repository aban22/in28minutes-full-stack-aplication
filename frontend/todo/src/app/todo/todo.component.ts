import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Todo } from '../list-todos/list-todos.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  id: number;
  todo: Todo;

  constructor(
    private todoDataService: TodoDataService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.todo = new Todo(this.id, '', false, new Date());
    if(this.id != -1) {
      this.todoDataService.retrieveTodo('in28minutes', this.id).subscribe(
        response => {
          this.todo = response;
        },
        error => {

        }
      );
    }
  }

  saveTodo() {
    if(this.id === -1) {
      this.todoDataService.saveTodo('in28minutes', this.todo).subscribe(
        response => {
          this.router.navigate(['todos']);
        }
      );
    }
    else {
      this.todoDataService.putTodo('in28minutes', this.todo).subscribe(
        response => {
          this.router.navigate(['todos']);
        }
      );
    }
  }
}
