import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConvertPageComponent } from './convert-page/convert-page.component';
import { HistoryComponent } from './history/history.component';

const routes: Routes = [
  {path:'',redirectTo:"currency",pathMatch:'full'},
  {path:'history',component:HistoryComponent},
  {path:'currency',component:ConvertPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
