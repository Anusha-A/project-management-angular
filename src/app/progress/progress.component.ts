import { Observable } from 'rxjs';
import { Subtaskmodel } from './../subtaskmodel';
import { SubtaskService } from './../subtask.service';
import { TaskService } from './../task.service';
import { TaskmodelModule } from './../taskmodel/taskmodel.module';
import { Component,Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';





@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})

export class ProgressComponent implements OnInit {
  
  tasks:TaskmodelModule[];
  taskdata;
  projectdata;
  errorMessage;

  tsk:TaskmodelModule;

  subtask:Array<Subtaskmodel> = new Array<Subtaskmodel>();
 //public subtask :Subtaskmodel[];
  //public subtask = new Array();
 
  formatSubtitle = (percent: number) : string => {
    if(percent >= 100){
      return "Completed!"
    }else if(percent >= 30){
      return "Ongoing"
    }else if(percent > 0){
      return "Just began"
    }else {
      return "Not started"
    }
  }
  
constructor(
  private route: ActivatedRoute,private taskService:TaskService, private subtaskService:SubtaskService,private _route:Router
) { }

  ngOnInit() {
    
    this.getTasks(sessionStorage.getItem("pid"));
    
  }
 //to get task details
  getTasks( id) {
    this.taskService.getTaskById(id).subscribe(
    task => {
     
        this.tasks = task;
        if(this.tasks.length<=0)
        {
          this.errorMessage="No tasks added yet!"
        }
    console.log(this.tasks);  
    
    },
    err => {
      
    console.log(err);
    }
    );
    }
//to get taskId and projectId to get its subtask details
    logId(value)
    {
      this.taskdata = value.getAttribute('data-task-id');
    //  this.projectdata = value.getAttribute('data-project-id')
      //let messageId = el.dataset.messageId;
      console.log("Task Id: ",  this.taskdata);
     // console.log("Project Id: ",  this.projectdata);
      //call the subtask serviece to retrive subtask details
     // this.getSubtasks(this.projectdata,this.taskdata);
    /*  this.subtask.push(this.projectdata);
      this.subtask.push(this.taskdata);
      console.log(this.subtask[0],this.subtask[1]);*/
      sessionStorage.setItem('tid', this.taskdata);
     // sessionStorage.setItem('pid', this.projectdata);
      
      
    }

    //method that access the subtask service
   /* getSubtasks( pid:number,tid:number) {
      this.subtaskService.getSubtask(pid,tid).subscribe(
      val => {
      this.subtask=val;

      this.subtaskService.myMethod(this.subtask);
      console.log(this.subtask);
      },
      err => {
      console.log(err);
      }
      );
     // this.taskService.getData(this.subtask);
      }*/
      
    /*  public getStudents(): any {
        const subtaskObservable = new Observable(observer => {
             observer.next(this.subtask);      
        });
   
        return subtaskObservable;
    }*/
      
   /* getSelectedTask(t:TaskmodelModule)
    {
      this.tsk=t;
      this.subtaskService.getSubtask(this.tsk.taskId,this.tsk.project.projectId);
    }*/
      
   

}
