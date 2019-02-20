import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private httpClient: HttpClient) {

   }

  retrieveAllTodos(username) {
    return this.httpClient.get<Todo[]>(`http://localhost:8080/user/${username}/todos`);
  }

  deleteTodo(username, id) {
    return this.httpClient.delete(`http://localhost:8080/user/${username}/todos/${id}`);
  }

  retrieveTodo(username, id) {
    return this.httpClient.get<Todo>(`http://localhost:8080/user/${username}/todos/${id}`);
  }

  putTodo(username, todo) {
    return this.httpClient.put(`http://localhost:8080/user/${username}/todos`, todo);
  }

  saveTodo(username, todo) {
    return this.httpClient.post(`http://localhost:8080/user/${username}/todos`, todo);
  }
}




export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ){ 

  }
}
