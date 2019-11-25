import { ProjectService } from './../project.service';
import { Projectmodel } from './../projectmodel';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ongoing-projects',
  templateUrl: './ongoing-projects.component.html',
  styleUrls: ['./ongoing-projects.component.css']
})
export class OngoingProjectsComponent implements OnInit {
  projects : Projectmodel[];
  constructor(private projectService: ProjectService) { }
projectdata;
  ngOnInit() {
    this.projectService.findOngoing().subscribe(data => {
      this.projects = data;
    });
    
  }
  gotonext(proj)
  {
    this.projectdata = proj.getAttribute('data-project-id');
    sessionStorage.setItem('pid', this.projectdata);
  }

}
