import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule}  from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './template/navbar/navbar.component';
import { FooterComponent } from './template/footer/footer.component';
import {MatToolbar, MatToolbarModule} from "@angular/material/toolbar";


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, HttpClientModule, BrowserAnimationsModule, MatToolbarModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
