import { Projectmodel } from './../projectmodel';
import { ProjectService } from './../project.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-completed-projects',
  templateUrl: './completed-projects.component.html',
  styleUrls: ['./completed-projects.component.css']
})
export class CompletedProjectsComponent implements OnInit {
  projects : Projectmodel[];
  projectdata;
  constructor(private projectService:ProjectService) { }

  ngOnInit() {
    this.projectService.findAll().subscribe(data => {
      this.projects = data;
    });
  }
  gotonext(proj)
  {
    this.projectdata = proj.getAttribute('data-project-id');
    sessionStorage.setItem('pid', this.projectdata);
  }

}
