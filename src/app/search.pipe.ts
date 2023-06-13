import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(Items:any[] , searchTxt: any): any {
   
    if(!searchTxt){
      return Items;
    }
    return Items.filter((Item)=>{

      if(!Item.name){
        if(searchTxt){
          if(Item.id==searchTxt 
            ||Item.age==searchTxt 
            ||Item.mobileNumber==searchTxt
            ||Item.departmentName.toLowerCase().includes(searchTxt.toLowerCase())
            ||Item.email.toLowerCase().includes(searchTxt.toLowerCase())
            ||Item.jobName.toLowerCase().includes(searchTxt.toLowerCase())
            ||Item.fullName.toLowerCase().includes(searchTxt.toLowerCase())
            ||Item.password.toLowerCase().includes(searchTxt.toLowerCase())
            )
            {
              return Item;
            }
          }

      }else{
        return Item.name.toLowerCase().includes(searchTxt.toLowerCase())||Item.id==searchTxt;

      }
      
    })
  }

}
