import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AlertsService } from '../service/alerts.service';

@Component({
  selector: 'app-convert-page',
  templateUrl: './convert-page.component.html',
  styleUrls: ['./convert-page.component.css']
})
export class ConvertPageComponent implements OnInit {
  public amount:String="";
  public x:String="";
  public show = true;
  currencies=[
    "EUR","USD"	,"British Pound","Indian Rupee	",
    "Australian Dollar",
    "Canadian Dollar	",
    "Singapore Dollar",
    "Swiss Franc	",
    "Malaysian Ringgit",
    "Japanese Yen",
    "Chinese Yuan Renminbi" 
   ]
  constructor(private fb:FormBuilder,private toastr: AlertsService){}

  ngOnInit(): void {
    this.amount="aa";
    this.profileForm = this.fb.group({
      amount:[''],
      from:this.currencies[0],
      to:this.currencies[1]
    })
    this.profileForm.value["from"] = this.currencies[0];
  }
  
  title = 'CodingChallenge_Front';
  profileForm = this.fb.group({
    amount:['1.00'],
    from:[],
    to:[]
  })
  
  Convert()
    {
      this.amount=this.profileForm.value["amount"]+this.profileForm.value["from"]
      console.log(this.profileForm.value["from"])
      this.toastr.showError('Name required', 'Erreur'); 
    }
    Reverse()
    {
      this.profileForm = this.fb.group({
        amount:this.profileForm.value["amount"],
        from:this.profileForm.value["to"],
        to:this.profileForm.value["from"]
      })
    }

}
