import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from './../project.service';
import { Projectmodel } from './../projectmodel';
import {ProjectDescStake} from './../project-desc-stake';





@Component({
  selector: 'app-phases',
  templateUrl: './phases.component.html',
  styleUrls: ['./phases.component.css']
})
export class PhasesComponent implements OnInit {
  projects:Projectmodel[];
  mongodata:ProjectDescStake[];

  constructor(
    private route: ActivatedRoute, private projectService:ProjectService
  ) { }

  ngOnInit() {
    
   
    this.getProject(sessionStorage.getItem("pid"));

}
getProject( id ) {
  this.projectService.getProjectById(id).then(
  proj => {
  this.projects = proj;
  console.log(proj.length);
  },
  
  );
  this.projectService.findMongodata(id).subscribe(
    resultvalue => {
      this.mongodata= resultvalue;
      console.log(this.mongodata);
    }
  )

  }
}
