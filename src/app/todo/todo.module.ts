import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo/todo.component';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes=[
  {path:'',component:TodoComponent}
]

@NgModule({
  declarations: [
    TodoComponent
  ],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class TodoModule { }
