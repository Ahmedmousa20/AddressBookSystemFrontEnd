import { Component, OnInit  } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  token: any;
  constructor(private _Router : Router )  { }
  logout(){
    localStorage.removeItem("token");
    this.token=null;
    this._Router.navigateByUrl("/login"); 
    // this.showMenuItem=false;   
  }
  ngOnInit(): void {
    // this.showMenuItem=false;
     this.token= localStorage.getItem("token");
  }

}
