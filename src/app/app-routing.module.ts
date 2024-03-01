import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StdloginComponent } from './stdlogin/stdlogin.component';

const routes: Routes = [{path:'std',component:StdloginComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 


}
 