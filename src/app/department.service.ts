import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private _http:HttpClient) { }

  getDepartments():Observable<any>
  {
    return this._http.get(`https://localhost:5001/Api/Department`);
  }

  getDepartmentById(id:number):Observable<any>
  {
    return this._http.get(`https://localhost:5001/Api/Department/${id}`);
  }

  createDepartment(Department:any):Observable<any>
  {
    return this._http.post("https://localhost:5001/Api/Department", Department, {responseType: 'text'});
  }

  UpdateDepartment(Department:any):Observable<any>
  {
    console.log(Department);
    
    return this._http.put("https://localhost:5001/Api/Department", Department,{responseType: 'text'});
  }

  DeleteDepartment(Department:any):Observable<any>
  {
    console.log(Department);
    
    return this._http.delete("https://localhost:5001/Api/Department", {
      body:Department
    });
  }
}
