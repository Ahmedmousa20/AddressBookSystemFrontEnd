import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { JobService } from '../job.service';

@Component({
  selector: 'app-create-job',
  templateUrl: './create-job.component.html',
  styleUrls: ['./create-job.component.scss']
})
export class CreateJobComponent implements OnInit {

  constructor( private _Router:Router , private _jobService: JobService ) { }

  CreateJob:FormGroup=new FormGroup({
    'Name':new FormControl(null,[Validators.required]),
  })

  Create(){
    console.log("hiiiiiiiiii");

    if(this.CreateJob.invalid){
      return;
    }
    
    this._jobService.createJob(this.CreateJob.value).subscribe((res)=>{
      console.log(res)
      this._Router.navigateByUrl("/JobsHome");
    })
  }

  ngOnInit(): void {
  }

}
