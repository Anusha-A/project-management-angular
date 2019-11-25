import { Employee } from './employee';

export class Projectmodel {
    _id:string;
    projectId: number;
    name:string;
    projectDesc:string;
    startDate:Date;
    endDate:Date;
   stakeholders:string;
    manager:Employee;
    constructor(projectId: number, name: string,projectDesc:string, startDate:Date,endDate:Date, stakeholders: string,manager:Employee)
    {   
        this.projectId=projectId;
        this.name = name;
       this.projectDesc = projectDesc;
        this.startDate = startDate;
        this.endDate = endDate;
       this.stakeholders=stakeholders;
        this.manager=manager;
       
     }
}
