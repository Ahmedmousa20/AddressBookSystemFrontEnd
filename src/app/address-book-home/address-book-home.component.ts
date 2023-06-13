import { Component, OnInit } from '@angular/core';
import { AddressbookService } from '../addressbook.service';
import * as XLSX from 'xlsx';
import { Cons } from 'rxjs';

@Component({
  selector: 'app-address-book-home',
  templateUrl: './address-book-home.component.html',
  styleUrls: ['./address-book-home.component.scss']
})
export class AddressBookHomeComponent implements OnInit {

  AddressBooks:any[]=[];
  term:any='';

  constructor(private _addressBookService: AddressbookService) { }


  GetAddressBooks(){
    this._addressBookService.getAddressBooks().subscribe((data)=>{
      this.AddressBooks=data;
      console.log(this.AddressBooks);
    })
  }

  exportToExcel() {
    const worksheet = XLSX.utils.json_to_sheet(this.AddressBooks);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
    XLSX.writeFile(workbook, 'data.xlsx');
  }
  ngOnInit(): void {
    this.GetAddressBooks();
  }

}
