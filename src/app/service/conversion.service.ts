import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ConversionService {
  public host:string="http://localhost:3000/api/conversions"
  constructor(private httpClient:HttpClient) { }
  public getConversion(page:number,size:number){
    return this.httpClient.get(this.host+"/employes?page="+page+"&size="+size);

  }
  public AddConversion(body:any){
    return this.httpClient.post(this.host,body);
  }
}
