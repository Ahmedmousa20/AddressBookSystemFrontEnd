import { Component, OnInit } from '@angular/core';
import { JobService } from '../job.service';

@Component({
  selector: 'app-jobs-home',
  templateUrl: './jobs-home.component.html',
  styleUrls: ['./jobs-home.component.scss']
})
export class JobsHomeComponent implements OnInit {

  constructor(private _jobService:JobService) { }

  jobs:any[]=[];
  term:any='';

  GetJobs(){
    this._jobService.getJobs().subscribe((data)=>{
      this.jobs=data;
      console.log(this.jobs);
    })
  }

  ngOnInit(): void {
    this.GetJobs();
  }

}
