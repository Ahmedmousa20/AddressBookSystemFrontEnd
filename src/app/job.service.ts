import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor(private _http:HttpClient) { }

  getJobs():Observable<any>
  {
    return this._http.get(`https://localhost:5001/Api/Job`);
  }

  getJobById(id:number):Observable<any>
  {
    return this._http.get(`https://localhost:5001/Api/Job/${id}`);
  }

  createJob(Job:any):Observable<any>
  {
    return this._http.post("https://localhost:5001/Api/Job", Job, {responseType: 'text'});
  }

  UpdateJob(Job:any):Observable<any>
  {
    console.log(Job);
    
    return this._http.put("https://localhost:5001/Api/Job", Job,{responseType: 'text'});
  }

  DeleteJob(Job:any):Observable<any>
  {
    console.log(Job);
    
    return this._http.delete("https://localhost:5001/Api/Job", {
      body:Job
    });
  }
}
