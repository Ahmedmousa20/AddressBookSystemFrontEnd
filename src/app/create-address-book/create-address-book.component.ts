import { Component, OnInit } from '@angular/core';
import { AddressbookService } from '../addressbook.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { JobService } from '../job.service';
import { DepartmentService } from '../department.service';

@Component({
  selector: 'app-create-address-book',
  templateUrl: './create-address-book.component.html',
  styleUrls: ['./create-address-book.component.scss']
})
export class CreateAddressBookComponent implements OnInit {

  constructor(private _AddressbookService :AddressbookService , private _Router:Router , private _jobService:JobService , private _DepartmentService:DepartmentService) {}
  
  jobs:any[]=[];
  Departments:any[]=[];
  image:any;
  error:any;

  CreateAddressBook:FormGroup=new FormGroup({
    'FullName':new FormControl(null,[Validators.required]),
    'JobId':new FormControl(null,[Validators.required]),
    'DepartmentId':new FormControl(null,[Validators.required]), 
    'MobileNumber':new FormControl(null,[Validators.required , Validators.pattern(/^01[0125][0-9]{8}$/)]),
    'DateOfBirth':new FormControl(null),
    'Address':new FormControl(null),
    'Email':new FormControl(null,[Validators.required,Validators.email]),
    'Password':new FormControl(null,[Validators.required]),
    'Photo':new FormControl(null),
    'Age':new FormControl(null,[Validators.required]),
  })

  SelectFile(e: any) {
    this.image = e.target.files[0];
    this.CreateAddressBook.patchValue({
      'Photo': this.image
    });
  }
  
  Create(){
    console.log("hiiiiiiiiii");

    if(this.CreateAddressBook.invalid){
      return;
    }
    let formData = new FormData();
    formData.append('FullName', this.CreateAddressBook.controls['FullName'].value);
    formData.append('JobId', this.CreateAddressBook.controls['JobId'].value);
    formData.append('DepartmentId', this.CreateAddressBook.controls['DepartmentId'].value);
    formData.append('MobileNumber', this.CreateAddressBook.controls['MobileNumber'].value);
    formData.append('DateOfBirth', this.CreateAddressBook.controls['DateOfBirth'].value);
    formData.append('Address', this.CreateAddressBook.controls['Address'].value);
    formData.append('Email', this.CreateAddressBook.controls['Email'].value);
    formData.append('Password', this.CreateAddressBook.controls['Password'].value);
    formData.append('Photo', this.CreateAddressBook.controls['Photo'].value);
    formData.append('Age', this.CreateAddressBook.controls['Age'].value);
    console.log(formData);
    this._AddressbookService.createAddressBook(formData).subscribe((res)=>{
      console.log(res)
      this._Router.navigateByUrl("/AddressBookHome");
    },(error)=>{
      this.error = error.error.errors[0];
      console.log(error.error.errors[0]);
    }
    
    );
  }

  GetJobs(){
    this._jobService.getJobs().subscribe((data)=>{
      this.jobs=data;
      console.log(this.jobs);
    })
  }
  
  GetDepartments(){
   
    this._DepartmentService.getDepartments().subscribe((data)=>{
      this.Departments=data;
      console.log(this.Departments);
    })
  }
  ngOnInit(): void {
    this.GetDepartments();
    this.GetJobs();
  }

}
