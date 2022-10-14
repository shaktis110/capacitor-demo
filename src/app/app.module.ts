import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { FirebaseX } from '@awesome-cordova-plugins/firebase-x/ngx';
import { StatusBar } from '@awesome-cordova-plugins/status-bar/ngx';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },FirebaseX,StatusBar],
  bootstrap: [AppComponent],
})
export class AppModule {}
