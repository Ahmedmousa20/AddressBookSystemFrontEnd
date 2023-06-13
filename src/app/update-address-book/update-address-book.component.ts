import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AddressbookService } from '../addressbook.service';
import { ActivatedRoute, Router } from '@angular/router';
import { JobService } from '../job.service';
import { DepartmentService } from '../department.service';

@Component({
  selector: 'app-update-address-book',
  templateUrl: './update-address-book.component.html',
  styleUrls: ['./update-address-book.component.scss']
})
export class UpdateAddressBookComponent implements OnInit {

  oldAddressBook:any;
  jobs:any[]=[];
  Departments:any[]=[];
  id:any;

  constructor(private _AddressbookService :AddressbookService , private _Router:Router, private _ActivatedRoute:ActivatedRoute , private _jobService:JobService , private _DepartmentService:DepartmentService) {}

  UpdateAddressBook:FormGroup=new FormGroup({
    'Id':new FormControl(null),
    'FullName':new FormControl(null,[Validators.required]),
    'JobId':new FormControl(null,[Validators.required]),
    'DepartmentId':new FormControl(null,[Validators.required]), 
    'MobileNumber':new FormControl(null,[Validators.required , Validators.pattern(/^01[0125][0-9]{8}$/)]),
    'DateOfBirth':new FormControl(null),
    'Address':new FormControl(null),
    'Email':new FormControl(null,[Validators.required,Validators.email]),
    'Password':new FormControl(null,[Validators.required]),
    'PhotoUrl':new FormControl(null),
    'Age':new FormControl(null,[Validators.required]),
  })
  GetJobs(){
    this._jobService.getJobs().subscribe((data)=>{
      this.jobs=data;
      console.log(this.jobs);
    })
  }

  getBookAddress(){
    this.id=this._ActivatedRoute.snapshot.paramMap.get('id');
    this._AddressbookService.getAddressBookById(this.id).subscribe((data)=>{
      this.oldAddressBook=data;
      console.log(this.oldAddressBook);
      this.UpdateAddressBook.get("Id")?.setValue(this.id);
      this.UpdateAddressBook.get("FullName")?.setValue(this.oldAddressBook.fullName);
      this.UpdateAddressBook.get("JobId")?.setValue(this.oldAddressBook.jobId);
      this.UpdateAddressBook.get("DepartmentId")?.setValue(this.oldAddressBook.departmentId);
      this.UpdateAddressBook.get("MobileNumber")?.setValue(this.oldAddressBook.mobileNumber);
      this.UpdateAddressBook.get("DateOfBirth")?.setValue(this.oldAddressBook.dateOfBirth);
      this.UpdateAddressBook.get("Address")?.setValue(this.oldAddressBook.address);
      this.UpdateAddressBook.get("Email")?.setValue(this.oldAddressBook.email);
      this.UpdateAddressBook.get("Password")?.setValue(this.oldAddressBook.password);
      this.UpdateAddressBook.get("PhotoUrl")?.setValue(this.oldAddressBook.photoUrl);
      this.UpdateAddressBook.get("Age")?.setValue(this.oldAddressBook.age);

    })

  }

  Update(){
    if(this.UpdateAddressBook.invalid){
      return;
    }
    let formData = new FormData();
    formData.append('Id', this.UpdateAddressBook.controls['Id'].value);
    formData.append('FullName', this.UpdateAddressBook.controls['FullName'].value);
    formData.append('JobId', this.UpdateAddressBook.controls['JobId'].value);
    formData.append('DepartmentId', this.UpdateAddressBook.controls['DepartmentId'].value);
    formData.append('MobileNumber', this.UpdateAddressBook.controls['MobileNumber'].value);
    formData.append('DateOfBirth', this.UpdateAddressBook.controls['DateOfBirth'].value);
    formData.append('Address', this.UpdateAddressBook.controls['Address'].value);
    formData.append('Email', this.UpdateAddressBook.controls['Email'].value);
    formData.append('Password', this.UpdateAddressBook.controls['Password'].value);
    formData.append('PhotoUrl', this.UpdateAddressBook.controls['PhotoUrl'].value);
    formData.append('Age', this.UpdateAddressBook.controls['Age'].value);
    this._AddressbookService.UpdateAddressBook(formData).subscribe((res)=>{
      this._Router.navigateByUrl("/AddressBookHome");

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
    this.getBookAddress()

  }

}
