import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddressBookHomeComponent } from './address-book-home/address-book-home.component';
import { CreateAddressBookComponent } from './create-address-book/create-address-book.component';
import { UpdateAddressBookComponent } from './update-address-book/update-address-book.component';
import { DeleteAddressBookComponent } from './delete-address-book/delete-address-book.component';
import { DepartmenstHomeComponent } from './departmenst-home/departmenst-home.component';
import { CreateDepartmentComponent } from './create-department/create-department.component';
import { UpdateDepartmentComponent } from './update-department/update-department.component';
import { DeleteDepartmentComponent } from './delete-department/delete-department.component';
import { CreateJobComponent } from './create-job/create-job.component';
import { UpdateJobComponent } from './update-job/update-job.component';
import { DeleteJobComponent } from './delete-job/delete-job.component';
import { JobsHomeComponent } from './jobs-home/jobs-home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SearchPipe } from './search.pipe';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    AddressBookHomeComponent,
    CreateAddressBookComponent,
    UpdateAddressBookComponent,
    DeleteAddressBookComponent,
    DepartmenstHomeComponent,
    CreateDepartmentComponent,
    UpdateDepartmentComponent,
    DeleteDepartmentComponent,
    CreateJobComponent,
    UpdateJobComponent,
    DeleteJobComponent,
    JobsHomeComponent,
    NavbarComponent,
    NotFoundComponent,
    SearchPipe,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
