import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DepartmentService } from '../department.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-department',
  templateUrl: './update-department.component.html',
  styleUrls: ['./update-department.component.scss']
})
export class UpdateDepartmentComponent implements OnInit {

  oldDepartment:any;
  id:any;
  constructor( private _Router:Router , private _DepartmentService: DepartmentService ,  private _ActivatedRoute:ActivatedRoute ) { }
  UpdateDepartment:FormGroup=new FormGroup({
    'Id':new FormControl(null),
    'Name':new FormControl(null,[Validators.required]),
  })

  Update(){
    if(this.UpdateDepartment.invalid&& this.UpdateDepartment.get("Id")!=this.oldDepartment.id){
      return;
    }
    this._DepartmentService.UpdateDepartment(this.UpdateDepartment.value).subscribe((res)=>{
      this._Router.navigateByUrl("/DepartmentsHome");

    })
  }
  getDepartment(){
    this.id=this._ActivatedRoute.snapshot.paramMap.get('id');
    this._DepartmentService.getDepartmentById(this.id).subscribe((data)=>{
      this.oldDepartment=data;
      console.log(this.oldDepartment);
      this.UpdateDepartment.get("Id")?.setValue(this.oldDepartment.id);
      this.UpdateDepartment.get("Name")?.setValue(this.oldDepartment.name);
    })

  }

  ngOnInit(): void {
    this.getDepartment();
  }

}
