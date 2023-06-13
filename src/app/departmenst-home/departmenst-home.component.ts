import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../department.service';

@Component({
  selector: 'app-departmenst-home',
  templateUrl: './departmenst-home.component.html',
  styleUrls: ['./departmenst-home.component.scss']
})
export class DepartmenstHomeComponent implements OnInit {

  constructor(private _DepartmentService:DepartmentService) { }

  departments:any[]=[];
  term:any='';
  startDate:any;
  endDate:any;
  
  GetDepartments(){
    this._DepartmentService.getDepartments().subscribe((data)=>{
      this.departments=data;
      console.log(this.departments);
    })
  }

  ngOnInit(): void {
    this.GetDepartments();
  }

}
