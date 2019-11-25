import { SubtaskService } from './subtask.service';
import { ProjectService } from './project.service';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {ProgressBarModule} from "angular-progress-bar";
import { NgCircleProgressModule } from 'ng-circle-progress';
import {RoundProgressModule} from 'angular-svg-round-progressbar';
import { HttpClientModule } from '@angular/common/http'; 


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhasesComponent } from './phases/phases.component';
import { RouterModule } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProgressComponent } from './progress/progress.component';
import { SubTasksComponent } from './sub-tasks/sub-tasks.component';
import { OngoingProjectsComponent } from './ongoing-projects/ongoing-projects.component';
import { CompletedProjectsComponent } from './completed-projects/completed-projects.component';
import { EmployeeDataComponent } from './employee-data/employee-data.component';
import { EmployeeService } from './employee.service';
import { TaskService } from './task.service';

@NgModule({
  declarations: [
    AppComponent,
    PhasesComponent,
    ProjectsComponent,
    ProgressComponent,
    SubTasksComponent,
    OngoingProjectsComponent,
    CompletedProjectsComponent,
    EmployeeDataComponent
    
  ],
  imports: [
    MatProgressBarModule,
    ProgressBarModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: 'completedProjects',component: CompletedProjectsComponent},
      {path: 'ongoingProjects',component:OngoingProjectsComponent},
      {path: 'phases', component: PhasesComponent},
      {path: 'progress', component:ProgressComponent},
      {path: 'subtasks', component:SubTasksComponent},
      {path:'employeeData', component:EmployeeDataComponent}
     
    ]),
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300,
    }),
    RoundProgressModule,
    BrowserAnimationsModule
  ],
  providers: [ProjectService,EmployeeService,SubtaskService,TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
