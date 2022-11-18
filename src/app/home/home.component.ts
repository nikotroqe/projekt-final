import { Component, OnInit } from '@angular/core';
import { TodoList } from '../todo-list/todo-list.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  constructor(private router: Router) { }  
  
  ngOnInit() {  
  }  

  item: TodoList[] = [];

 
  addItemMsg(values: TodoList): void{
    if(this.itemToEdit){
      this.item.splice
        //(this.item.findIndex(item => item === itemToEdit),
        //1,
        //values
      //);
    }else{
      this.item.unshift(values);
    }
      
  }

  itemToEdit?: TodoList;

  addItem(values: TodoList): void{
    if(this.itemToEdit){
      this.item.splice
        //(this.item.findIndex(item => item === itemToEdit),
        //1,
        //values
      //);
    }else{
      this.item.unshift(values);
    }
      
  }
  
  editItem(item: TodoList): void{
    this.itemToEdit = item;
  }

  deleteItem(item: TodoList): void{
    this.item.splice(this.item.findIndex(i => i === item),1)
  }
  
  Logout() {   
    setTimeout(() => {
      this.router.navigate(['login']);
    }, 500)
        
      
  }  
}
