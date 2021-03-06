import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule, FormsModule  } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { IpManagerComponent } from './ip-manager/ip-manager.component';
import { HomeComponent } from './home/home.component';
import { RouterModule} from '@angular/router';
@NgModule({
  declarations: [
    AppComponent,
    IpManagerComponent,
    HomeComponent,
    ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    RouterModule
 ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
