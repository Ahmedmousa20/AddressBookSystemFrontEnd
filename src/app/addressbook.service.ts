import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddressbookService {

  constructor(private _http:HttpClient) { }

  getAddressBooks():Observable<any>
  {
    return this._http.get(`https://localhost:5001/Api/AddressBook`);
  }

  getAddressBookById(id:number):Observable<any>
  {
    return this._http.get(`https://localhost:5001/Api/AddressBook/${id}`);
  }

  createAddressBook(AddressBook:any):Observable<any>
  {
    return this._http.post("https://localhost:5001/Api/AddressBook", AddressBook);
  }

  UpdateAddressBook(AddressBook:any):Observable<any>
  {
    console.log(AddressBook);
    
    return this._http.put("https://localhost:5001/Api/AddressBook", AddressBook,{responseType: 'text'});
  }

  DeleteAddressBook(AddressBook:any):Observable<any>
  {
    console.log(AddressBook);
    
    return this._http.delete("https://localhost:5001/Api/AddressBook", {
      body:AddressBook
    });
  }
}
