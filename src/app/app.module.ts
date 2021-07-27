import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HomepageComponent} from './homepage/homepage.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {IntercepterService} from '../@core/intercepter/intercepter.service';
import {AuthGuard} from '../guards/auth-guard.service';
@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: IntercepterService, multi: true}, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
