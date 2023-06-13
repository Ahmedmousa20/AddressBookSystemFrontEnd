import { Component, OnInit } from '@angular/core';
import { AddressbookService } from '../addressbook.service';
import { ActivatedRoute, Router } from '@angular/router';
import { JobService } from '../job.service';
import { DepartmentService } from '../department.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-delete-address-book',
  templateUrl: './delete-address-book.component.html',
  styleUrls: ['./delete-address-book.component.scss']
})
export class DeleteAddressBookComponent implements OnInit {
  oldAddressBook:any;
  jobs:any[]=[];
  Departments:any[]=[];
  id:any;
  constructor(private _AddressbookService :AddressbookService , private _Router:Router, private _ActivatedRoute:ActivatedRoute , private _jobService:JobService , private _DepartmentService:DepartmentService) {}

  DeleteAddressBook:FormGroup=new FormGroup({
    'Id':new FormControl({value:'',disabled:true}),
    'FullName':new FormControl({value:'',disabled:true},[Validators.required]),
    'JobId':new FormControl({value:'',disabled:true},[Validators.required]),
    'DepartmentId':new FormControl({value:'',disabled:true},[Validators.required]), 
    'MobileNumber':new FormControl({value:'',disabled:true},[Validators.required , Validators.pattern(/^01[0125][0-9]{8}$/)]),
    'DateOfBirth':new FormControl({value:'',disabled:true}),
    'Address':new FormControl({value:'',disabled:true}),
    'Email':new FormControl({value:'',disabled:true},[Validators.required,Validators.email]),
    'Password':new FormControl({value:'',disabled:true},[Validators.required]),
    'PhotoUrl':new FormControl({value:'',disabled:true}),
    'Age':new FormControl({value:'',disabled:true},[Validators.required]),
  })


  Delete(){
    if(this.DeleteAddressBook.invalid){
      return;
    }
    let formData = new FormData();
    formData.append('Id', this.DeleteAddressBook.controls['Id'].value);
    formData.append('FullName', this.DeleteAddressBook.controls['FullName'].value);
    formData.append('JobId', this.DeleteAddressBook.controls['JobId'].value);
    formData.append('DepartmentId', this.DeleteAddressBook.controls['DepartmentId'].value);
    formData.append('MobileNumber', this.DeleteAddressBook.controls['MobileNumber'].value);
    formData.append('DateOfBirth', this.DeleteAddressBook.controls['DateOfBirth'].value);
    formData.append('Address', this.DeleteAddressBook.controls['Address'].value);
    formData.append('Email', this.DeleteAddressBook.controls['Email'].value);
    formData.append('Password', this.DeleteAddressBook.controls['Password'].value);
    formData.append('PhotoUrl', this.DeleteAddressBook.controls['PhotoUrl'].value);
    formData.append('Age', this.DeleteAddressBook.controls['Age'].value);
    this._AddressbookService.DeleteAddressBook(formData).subscribe((res)=>{
      this._Router.navigateByUrl("/AddressBookHome");

    })
  }

  GetDepartments(){
   
    this._DepartmentService.getDepartments().subscribe((data)=>{
      this.Departments=data;
      console.log(this.Departments);
    })
  }
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
      this.DeleteAddressBook.get("Id")?.setValue(this.id);
      this.DeleteAddressBook.get("FullName")?.setValue(this.oldAddressBook.fullName);
      this.DeleteAddressBook.get("JobId")?.setValue(this.oldAddressBook.jobId);
      this.DeleteAddressBook.get("DepartmentId")?.setValue(this.oldAddressBook.departmentId);
      this.DeleteAddressBook.get("MobileNumber")?.setValue(this.oldAddressBook.mobileNumber);
      this.DeleteAddressBook.get("DateOfBirth")?.setValue(this.oldAddressBook.dateOfBirth);
      this.DeleteAddressBook.get("Address")?.setValue(this.oldAddressBook.address);
      this.DeleteAddressBook.get("Email")?.setValue(this.oldAddressBook.email);
      this.DeleteAddressBook.get("Password")?.setValue(this.oldAddressBook.password);
      this.DeleteAddressBook.get("PhotoUrl")?.setValue(this.oldAddressBook.photoUrl);
      this.DeleteAddressBook.get("Age")?.setValue(this.oldAddressBook.age);

    })

  }

  ngOnInit(): void {
    this.GetDepartments();
    this.GetJobs();
    this.getBookAddress()
  }

}
