import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todoItem = {
    id: Date.now(),
    title: ""
  };
  todoItems = [];

  constructor() { }

  ngOnInit(): void {
    this.todoItems = JSON.parse(localStorage.data)
    console.log(localStorage.data);
    
  }

  addToTodoList() {
    this.todoItems.push(this.todoItem)
    //save to local storage
    localStorage.data = JSON.stringify(this.todoItems)
    //reset item
    this.todoItem = {
      id: Date.now(),
      title: ""
    }

  }
  removeFromToDoList(id) {
    this.todoItems = this.todoItems.filter(e => e.id !== id)
    localStorage.data = JSON.stringify(this.todoItems);
    //remove from local storage
  }

}
