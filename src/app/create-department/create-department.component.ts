import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JobService } from '../job.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DepartmentService } from '../department.service';

@Component({
  selector: 'app-create-department',
  templateUrl: './create-department.component.html',
  styleUrls: ['./create-department.component.scss']
})
export class CreateDepartmentComponent implements OnInit {

 
  constructor( private _Router:Router , private _DepartmentService: DepartmentService ) { }

  CreateDepartment:FormGroup=new FormGroup({
    'Name':new FormControl(null,[Validators.required]),
  })

  Create(){
    console.log("hiiiiiiiiii");

    if(this.CreateDepartment.invalid){
      return;
    }
    
    this._DepartmentService.createDepartment(this.CreateDepartment.value).subscribe((res)=>{
      console.log(res)
      this._Router.navigateByUrl("/DepartmentsHome");
    })
  }

  ngOnInit(): void {
  }

}
