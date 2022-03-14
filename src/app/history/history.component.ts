import { Component, OnInit } from '@angular/core';
import { ConversionService } from '../service/conversion.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  public conversions:any;
  public conversion:any;
  public Months=["Jen","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  constructor(private conversionService:ConversionService) { }

  ngOnInit(): void {
    this.onGetConversions();
    
  }//2022-03-12T21:57:57.885Z
  onGetConversions():void{
    this.conversionService.getConversion()
    .subscribe(data=>{ 
      this.conversion=data;
      
      for (let i=0;i< this.conversion.length;i++){
        this.conversion[i]["date"]=this.Months[Number(this.conversion[i]["date"].slice(0,10).slice(5,7))-1]+" "+this.conversion[i]["date"].slice(0,10).slice(8,10)+", "+this.conversion[i]["date"].slice(0,10).slice(0,4);
        this.conversions=this.conversion;
        console.log(this.conversion[i]["date"].slice(0,10));
      }
      console.log(this.conversion);
    },err=>{
      console.log(err);
    })
    console.log(this.conversions)
  }
}
