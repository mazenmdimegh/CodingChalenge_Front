import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AlertsService } from '../service/alerts.service';
import { ConversionService } from '../service/conversion.service';

@Component({
  selector: 'app-convert-page',
  templateUrl: './convert-page.component.html',
  styleUrls: ['./convert-page.component.css']
})
export class ConvertPageComponent implements OnInit {
  public amount:String="";
  public result:String="";
  public x:String="";
  public Toast = false;
  currencies=[
    "EUR",
    "USD"	,
    "British Pound",
    "Indian Rupee",
    "Australian Dollar",
    "Canadian Dollar",
    "Singapore Dollar",
    "Swiss Franc",
    "Malaysian Ringgit",
    "Japanese Yen",
    "Chinese Yuan Renminbi" 
   ]
   c=new Map([
    ["EUR",6.922114,],
    ["Chinese Yuan Renminbi",1.00,],
    ["Indian Rupee",0.837437,],
    ["Australian Dollar",1.496368,],
    ["Canadian Dollar",1.391792,],
    ["Singapore Dollar",1.471498,],
    ["Malaysian Ringgit",4.579985,],
    ["Japanese Yen",128.073064,],
    ["USD",1.091888],
    ["British Pound",1.00],
    ["Swiss Franc",1.020617],

    ]);
  constructor(private fb:FormBuilder,private toastr: AlertsService,private conversionSevice:ConversionService ){}

  ngOnInit(): void {
    this.result="1.12392 USD";
    this.amount="1 EUR";
      this.profileForm = this.fb.group({
        amount:[''],
        from:this.currencies[0],
        to:this.currencies[1],
        result:[]
      })
  }
  
  title = 'CodingChallenge_Front';
  profileForm = this.fb.group({
    amount:['1.00'],
    from:[],
    to:[],
    result:[]
  })
  
  Convert()
    {
      if (this.profileForm.value["amount"]!=""){
          this.amount=this.profileForm.value["amount"]+" "+this.profileForm.value["from"]
          this.Toast = false;
          for (const x of this.c.entries()) {
            if (x[0]==this.profileForm.value["from"]){
                this.result=(Number(this.profileForm.value["amount"])/x[1]*Number(this.c.get(this.profileForm.value["to"]))).toString()+" "+this.profileForm.value["to"];
                this.profileForm = this.fb.group({
                  amount:this.profileForm.value["amount"],
                  from:this.profileForm.value["from"],
                  to:this.profileForm.value["to"],
                  result:(Number(this.profileForm.value["amount"])/x[1]*Number(this.c.get(this.profileForm.value["to"]))).toString()
                })
                console.log(this.profileForm.value)
                this.conversionSevice.AddConversion(this.profileForm.value)
                .subscribe(data=>{
                },err=>{
                  console.log(err);
            
                })
          }                                 
          }
    } else{
      this.toastr.showError('Name required', 'Erreur'); 
      this.Toast = true;
    }
     
    }
    Reverse()
    {
      this.profileForm = this.fb.group({
        amount:this.profileForm.value["amount"],
        from:this.profileForm.value["to"],
        to:this.profileForm.value["from"]
      })
      this.Convert();
    }

}
