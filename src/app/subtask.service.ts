import {Subtaskmodel} from './subtaskmodel';
import { Injectable,EventEmitter } from '@angular/core';
import {Observable,Subject} from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Employee } from './employee';

/*export class subtask{
  constructor( public subTaskTitle:string,public subTaskDescription:string,public  startDate:Date,public dueDate:Date,
    public progressPercentage:number ){
      
      this.subTaskTitle=subTaskTitle;
      this.subTaskDescription=subTaskDescription;
      this.startDate=startDate;
      this.dueDate=dueDate;
      this.progressPercentage=progressPercentage;
    }
}*/

@Injectable({
  providedIn: 'root'
})
export class SubtaskService {
  //create an observale variable 
  myMethod$: Observable<any>;
  private myMethodSubject = new Subject<any>();

  private subtaskUrl:string;

  

  constructor(private http: HttpClient) {
    this.subtaskUrl='http://b8java12.iiht.tech:9090/api/getsubtasks';

    
    this.myMethod$ = this.myMethodSubject.asObservable();
   }

  public getSubtask(pid: number,tid:number): Observable<Subtaskmodel[]> {
    const url = `${this. subtaskUrl}/${pid}/${tid}`;
    console.log(url);
   
   /* return this.http.get<Subtaskmodel[]>(url);*/
   
    return this.http.get<Subtaskmodel[]>(url);
   
    }
    
  

    myMethod(data:Array<any>) {
        console.log(data); // I have data! Let's return it so subscribers can use it!
        // we can do stuff with data if we want
       this.myMethodSubject.next(data);
       // return this.http.get<Subtaskmodel[]>("http://b8java12.iiht.tech:9090/api/getsubtasks"+data[0]+"/"+data[1]);
    }

    
    /*public getSubtask(pid: number,tid:number): Observable<Subtaskmodel[]> {
      const url = `${this. subtaskUrl}/${pid}/${tid}`;
      return this.http.get<Subtaskmodel[]>(url);
    }*/
}
