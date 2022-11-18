import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TodoList } from '../todo-list/todo-list.component';

@Component({
  selector: 'app-todo-table',
  templateUrl: './todo-table.component.html',
  styleUrls: ['./todo-table.component.scss']
})
export class TodoTableComponent implements OnInit {


  @Input('list')itemlist!: TodoList[];

  @Output('delete')onDelete: EventEmitter<TodoList> = new EventEmitter<TodoList>();  
  
  constructor() { }
  
    ngOnInit(): void {
    }
    deleteItem(item: TodoList): void{
      this.onDelete.emit(item);
    }
  
}
