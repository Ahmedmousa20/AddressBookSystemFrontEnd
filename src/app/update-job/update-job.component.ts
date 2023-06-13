import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JobService } from '../job.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-job',
  templateUrl: './update-job.component.html',
  styleUrls: ['./update-job.component.scss']
})
export class UpdateJobComponent implements OnInit {
  oldJob:any;
  id:any;
  constructor( private _Router:Router , private _jobService: JobService ,  private _ActivatedRoute:ActivatedRoute ) { }
  UpdateJob:FormGroup=new FormGroup({
    'Id':new FormControl(null),
    'Name':new FormControl(null,[Validators.required]),
  })

  Update(){
    if(this.UpdateJob.invalid&& this.UpdateJob.get("Id")!=this.oldJob.id){
      return;
    }
    this._jobService.UpdateJob(this.UpdateJob.value).subscribe((res)=>{
      this._Router.navigateByUrl("/JobsHome");

    })
  }
  getJob(){
    this.id=this._ActivatedRoute.snapshot.paramMap.get('id');
    this._jobService.getJobById(this.id).subscribe((data)=>{
      this.oldJob=data;
      console.log(this.oldJob);
      this.UpdateJob.get("Id")?.setValue(this.oldJob.id);
      this.UpdateJob.get("Name")?.setValue(this.oldJob.name);
    })

  }
  ngOnInit(): void {
    this.getJob();
  }

}
