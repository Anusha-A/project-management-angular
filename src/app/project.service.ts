import { Projectmodel } from './projectmodel';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private projectUrl: string;

  constructor(private http: HttpClient) {
    this.projectUrl = 'http://b8java12.iiht.tech:9090/api/getProjects';
  }
  public findAll(): Observable<Projectmodel[]> {
    var comp="completed";
    const url = `${this. projectUrl}/${comp}`;

    var valu= this.http.get<Projectmodel[]>(url);
    console.log(valu);
    return valu;
  }

  public findOngoing(): Observable<Projectmodel[]> {
    var ong="ongoing";
    const url = `${this. projectUrl}/${ong}`;
    return this.http.get<Projectmodel[]>(url);
  }

 /* public getProjectById(id: number): Array<Projectmodel[]> {
    const url = `${this. projectUrl}/${id}`;
    return this.http.get(url).toPromise().(response => response.json() as Projectmodel[]);
  }*/

  public getProjectById(id: number): Promise<Array<Projectmodel>> {
    const url = `${this. projectUrl}/${id}`;
    console.log(url);
    return this.http.get(url)
    .toPromise()
    .then(response => response as Projectmodel[])
    .catch(this.handleError);
    }
    private handleError(error: any): Promise<Array<any>> {
      console.error('An error occurred', error);
      return Promise.reject(error.message || error);
      }

      public findMongodata(id: number): Observable<Projectmodel[]> {
        var mong="mongodb";
        const url = `${this. projectUrl}/${mong}/${id}`;
        return this.http.get<Projectmodel[]>(url);
      }
    

     

      
}
