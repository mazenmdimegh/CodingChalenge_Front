import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-convert-page',
  templateUrl: './convert-page.component.html',
  styleUrls: ['./convert-page.component.css']
})
export class ConvertPageComponent implements OnInit {

  constructor(private fb:FormBuilder){}

  ngOnInit(): void {
  }
  
  title = 'CodingChallenge_Front';
  profileForm = this.fb.group({
    firstName:['']
  })
  createNewTask()
    {
        console.log(this.profileForm.value)
    }
}
