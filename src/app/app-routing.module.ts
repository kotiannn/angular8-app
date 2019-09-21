import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IpManagerComponent } from './ip-manager/ip-manager.component';
import { HomeComponent } from './home/home.component';
const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'manage-ip', component: IpManagerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
