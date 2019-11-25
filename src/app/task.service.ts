import { Subtaskmodel } from './subtaskmodel';
import { Employee } from './employee'
import { Injectable,EventEmitter } from '@angular/core';
import {Observable} from 'rxjs';


import { HttpClient, HttpHeaders } from '@angular/common/http';
import {TaskmodelModule} from './taskmodel/taskmodel.module';


@Injectable({
  providedIn: 'root'
})
export class TaskService {

 /* $subtaskdata = new EventEmitter();
  subtaskModel:Subtaskmodel[] = [];*/

  private taskUrl:string;
  constructor(private http: HttpClient) {
    this.taskUrl='http://b8java12.iiht.tech:9090/api/getTasks';
   }

  public getTaskById(id: number): Observable<TaskmodelModule[]> {
    const url = `${this. taskUrl}/${id}`;
    console.log(url);
    return this.http.get<TaskmodelModule[]>(url);
    }

   /* getData(subtaskModel) {
      this.subtaskModel=subtaskModel;
      this.$subtaskdata.emit(this.subtaskModel);
    }*/

    
    
    
}
