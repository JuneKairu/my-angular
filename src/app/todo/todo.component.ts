import { Component } from '@angular/core';
import { Todo } from '../todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent {
  todos: Todo[] = [];
  newTodo: string = '';

  addTodo() {
    if (this.newTodo.trim() === '') return;

    const todo: Todo = {
      id: this.todos.length + 1,
      task: this.newTodo,
      completed: false,
    };

    this.todos.push(todo);
    this.newTodo = '';
  }
}