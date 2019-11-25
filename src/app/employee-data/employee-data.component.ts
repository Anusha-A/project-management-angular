import { Projectmember } from './../projectmember';
import { EmployeeService } from './../employee.service';
import { Component, OnInit,Input } from '@angular/core';
import {Employee} from '../employee';


@Component({
  selector: 'app-employee-data',
  templateUrl: './employee-data.component.html',
  styleUrls: ['./employee-data.component.css']
})
export class EmployeeDataComponent implements OnInit {
  recievedvalue:string;
  empdata:Employee[];

  //variable to hold the deatils of employee that is been searched for
  employeeData;
  detailsOfEmployee: Projectmember[];

  constructor(private employeeService:EmployeeService) {
    
   }
   
  ngOnInit() {

    
    //get details from search bar to employee to be searched
    this.employeeService.receivedFilter.subscribe((param:string)=>{
      this.recievedvalue=param;
      console.log(this.recievedvalue);

      this.getEmployDetails(this.recievedvalue);
     });
      
      console.log(this.recievedvalue);
  }

  getEmployDetails(emp:string) //function to approach service to retrieve data
  {
    this.employeeService.getEmployeeData(emp).subscribe(data => {
      this.empdata = data;
      console.log(this.empdata);
    });
  }

  logData(val) //get id of the employee to searched
  {
    
    this.employeeData = val.getAttribute('data-emp-id');
    console.log(this.employeeData);
    this.getDetails(this.employeeData); // call the function that invokes the employee service to get theemployee information
   
  }


  //function that invoke the service to get data
  getDetails(val)
  {
    this.employeeService.getEmployeeDetails(val).subscribe(info=>{
      this.detailsOfEmployee=info;
      for(let detail of this.detailsOfEmployee){
        console.log(detail.employeeId.firstName)
      }
    });
  }

 

}
