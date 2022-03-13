import { Component, OnInit } from '@angular/core';
import { ConversionService } from '../service/conversion.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  public conversions:any;
  constructor(private conversionService:ConversionService) { }

  ngOnInit(): void {
    this.onGetConversions();
    
  }
  onGetConversions():void{
    this.conversionService.getConversion()
    .subscribe(data=>{ 
      this.conversions=data;
      console.log(this.conversions);
    },err=>{
      console.log(err);
    })
    console.log(this.conversions)
  }
}
