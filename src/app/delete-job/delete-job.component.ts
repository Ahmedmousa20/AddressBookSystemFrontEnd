import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JobService } from '../job.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-delete-job',
  templateUrl: './delete-job.component.html',
  styleUrls: ['./delete-job.component.scss']
})
export class DeleteJobComponent implements OnInit {

  oldJob:any;
  id:any;
  constructor( private _Router:Router , private _jobService: JobService ,  private _ActivatedRoute:ActivatedRoute ) { }
  DeleteJob:FormGroup=new FormGroup({
    'Id':new FormControl({value:'',disabled:true}),
    'Name':new FormControl({value:'',disabled:true},[Validators.required]),
  })

  Delete(){
    if(this.DeleteJob.invalid&& this.DeleteJob.get("Id")!=this.oldJob.id){
      return;
    }
    this._jobService.DeleteJob(this.DeleteJob.value).subscribe((res)=>{
      this._Router.navigateByUrl("/JobsHome");

    })
  }

  getJob(){
    this.id=this._ActivatedRoute.snapshot.paramMap.get('id');
    this._jobService.getJobById(this.id).subscribe((data)=>{
      this.oldJob=data;
      console.log(this.oldJob);
      this.DeleteJob.get("Id")?.setValue(this.oldJob.id);
      this.DeleteJob.get("Name")?.setValue(this.oldJob.name);
    })
  }

  ngOnInit(): void {
    this.getJob();
  }

}
