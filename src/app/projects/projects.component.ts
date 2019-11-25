import { ProjectService } from './../project.service';
import { Projectmodel } from './../projectmodel';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects : Projectmodel[];
  projectdata;
   

  constructor(private projectService: ProjectService ) { }

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
