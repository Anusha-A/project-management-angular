export class Subtaskmodel {
    constructor(
        
        public subTaskTitle:string,
        public subTaskDescription:string,
        public startDate:Date,
        public dueDate:Date,
        public progressPercentage:number
    ){}
   /* constructor(subTaskTitle:string, subTaskDescription:string,startDate:Date,dueDate:Date, progressPercentage:number)
    {
        this.subTaskTitle=subTaskTitle;
        this.subTaskDescription=subTaskDescription;
        this.startDate=startDate;
        this.dueDate=dueDate;
        this.progressPercentage=progressPercentage;
    }*/
}

