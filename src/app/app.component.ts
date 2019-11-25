import { EmployeeService } from './employee.service';
import { Component } from '@angular/core';
import {Employee} from './employee';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ViewProjects';
  valueSearched:string;
  empdata:Employee[];
 constructor(private employeeService:EmployeeService, private router: Router){
  

 }
 //get the string to search from html page
  getData(data: string) {
    
   //// this.valueSearched=data;
   // console.log(this.valueSearched);
    this.employeeService.raiseEvent(data);
    this.router.navigate(['/employeeData']);
    //this. getEmployDetails(this.valueSearched); // ask the service to retrive the data from database
    
  }

  /*getEmployDetails(emp:string) //function to approach service to retrieve data
  {
    this.employeeService.getEmployeeData(emp).subscribe(data => {
      this.empdata = data;
      console.log(this.empdata);
    });
  }*/


  
  
  
}
