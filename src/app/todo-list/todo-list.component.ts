import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export interface TodoList{
  prodname: string;
  status: boolean;
  date: Date;
  price: number;
}

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  @Input()
  prodname!: string;
  date!: Date;
  private _price!: number;
  
  @Input()status!: boolean;

  @Output()todoList: EventEmitter<TodoList> = new EventEmitter<TodoList>();

  constructor() { }

  ngOnInit(): void {
  }
  

  get price(): number{
    return this._price;
  }
  set price(value: number){
    this._price = value;
  }

  addButton(): void{
    if(this.prodname && this.price > 0){
      this.todoList.emit(
        {
        prodname: this.prodname,
        status: this.status,
        date: new Date(),
        price: this.price
      }
      );
      this.prodname = '';
      this.status = false;
      this.price = 0;
    }
  }
  
}
