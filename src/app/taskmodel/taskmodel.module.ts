import { Projectmodel } from './../projectmodel';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';




@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class TaskmodelModule {
  taskId:number;
  taskTitle:string;
  taskDescription:string;
  startDate:Date;
  dueDate:Date;
  progress:number;
  project:Projectmodel;
 }
