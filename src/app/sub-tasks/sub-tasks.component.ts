import { Subtaskmodel } from './../subtaskmodel';
import { TaskService } from './../task.service';
import { SubtaskService } from './../subtask.service';
import { Component, OnInit, Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { EventEmitter } from 'events';
import { ProgressComponent } from '../progress/progress.component';



@Component({
  selector: 'app-sub-tasks',
  templateUrl: './sub-tasks.component.html',
  styleUrls: ['./sub-tasks.component.css']
})
export class SubTasksComponent implements OnInit {

 // public data: Array<any> ;
  public sbtask:Subtaskmodel[];
 // subtask:Subtaskmodel[]= [];
  //subtask = Subtaskmodel[];  
  task=history.state.taskData;
  errorMessage:string;
  
 



 project=history.state.projectdata;
  
  constructor( private route: ActivatedRoute,  private subtaskService:SubtaskService
    ) { 
     /* this.subtaskService.myMethod$.subscribe(data => {
        this.data = data;
       })*/
      
     
      
    }
    ngOnInit() {

    /*  var newURL = window.location.pathname.split('/');
      console.log(newURL);
      var taskData = newURL[2];
      var projData = newURL[3]
      console.log(taskData);
      console.log(projData);
      var t = +taskData;
      var p =+projData;
      this.getSubTasks(p,t);*/
      this.getSubTasks(sessionStorage.getItem("tid"),sessionStorage.getItem("pid"))
    console.log(this.task);
    console.log(this.project);      

      
    }
   //to get task details
    getSubTasks( pid,tid) {
      this.subtaskService.getSubtask(pid,tid).subscribe(
      task => {
      this.sbtask = task;
      if(this.sbtask.length<=0)
      {
        this.errorMessage ="No Sub tasks added yet!"
      }
      console.log(this.sbtask.length);
      },
      err => {
      console.log(err);
      }
      );
      }
      
    /*  this.taskservice.$subtaskdata
      .subscribe((data)=>{
        
        this.subtask.push(data);
        console.log(this.subtask);
        
      })*/
     
        
     

  
    
    

}
