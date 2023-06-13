import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressBookHomeComponent } from './address-book-home/address-book-home.component';
import { CreateAddressBookComponent } from './create-address-book/create-address-book.component';
import { UpdateAddressBookComponent } from './update-address-book/update-address-book.component';
import { DeleteAddressBookComponent } from './delete-address-book/delete-address-book.component';
import { DepartmenstHomeComponent } from './departmenst-home/departmenst-home.component';
import { CreateDepartmentComponent } from './create-department/create-department.component';
import { UpdateDepartmentComponent } from './update-department/update-department.component';
import { JobsHomeComponent } from './jobs-home/jobs-home.component';
import { CreateJobComponent } from './create-job/create-job.component';
import { UpdateJobComponent } from './update-job/update-job.component';
import { DeleteJobComponent } from './delete-job/delete-job.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DeleteDepartmentComponent } from './delete-department/delete-department.component';
import { AuthGuardService } from './auth-guard.service';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = 
[
  {path:'',redirectTo:'AddressBookHome',pathMatch:'full'},
  {path:'AddressBookHome',component:AddressBookHomeComponent ,canActivate:[AuthGuardService]},
  {path:'AddressBookCreate',component:CreateAddressBookComponent,canActivate:[AuthGuardService]},
  {path:'AddressBookUpdate/:id',component:UpdateAddressBookComponent,canActivate:[AuthGuardService]},
  {path:'AddressBookDelete/:id',component:DeleteAddressBookComponent,canActivate:[AuthGuardService]},
  {path:'DepartmentsHome',component:DepartmenstHomeComponent,canActivate:[AuthGuardService]},
  {path:'CreateDepartment',component:CreateDepartmentComponent,canActivate:[AuthGuardService]},
  {path:'UpdateDepartment/:id',component:UpdateDepartmentComponent,canActivate:[AuthGuardService]},
  {path:'DeleteDepartment/:id',component:DeleteDepartmentComponent,canActivate:[AuthGuardService]},
  {path:'JobsHome',component:JobsHomeComponent,canActivate:[AuthGuardService]},
  {path:'CreateJob',component:CreateJobComponent,canActivate:[AuthGuardService]},
  {path:'UpdateJob/:id',component:UpdateJobComponent,canActivate:[AuthGuardService]},
  {path:'DeleteJob/:id',component:DeleteJobComponent,canActivate:[AuthGuardService]},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'**',component:NotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
