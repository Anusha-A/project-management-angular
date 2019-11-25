import { Projectmember } from './projectmember';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Employee } from './employee';
import { Injectable,EventEmitter } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private employeeUrl;
  private memberUrl;
  dataTosearch: string;
  receivedFilter: EventEmitter<string>;

  constructor(private http:HttpClient) { 
    this.employeeUrl = 'http://b8java12.iiht.tech:9090/api/search';
    this.memberUrl = 'http://b8java12.iiht.tech:9090/api/getteams';
    this.receivedFilter = new EventEmitter<string>();
  }

  public getEmployeeData(searchData:string): Observable<Employee[]>
  {
    const url = `${this. employeeUrl}/${searchData}`;

    var valu= this.http.get<Employee[]>(url);
    console.log(valu);
    return valu;
  }

  raiseEvent(dataTosearch: string): void {
      this.dataTosearch = dataTosearch;
      this.receivedFilter.emit(dataTosearch);
  }

  public getEmployeeDetails(empid:number): Observable<Projectmember[]>{
    
    const url = `${this. memberUrl}/${empid}`;
    return this.http.get<Projectmember[]>(url);
  }
}
