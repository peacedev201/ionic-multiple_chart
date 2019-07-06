import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { OneSignal } from '@ionic-native/onesignal';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { WaterPage } from '../pages/water/water';
import { WindPage } from '../pages/wind/wind';
import { AirPage } from '../pages/air/air';
import { PeopleServiceProvider } from '../providers/people-service/people-service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    WaterPage,
    WindPage,
    AirPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    WaterPage,
    WindPage,
    AirPage
  ],
  providers: [
    OneSignal,
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    PeopleServiceProvider
  ]
})
export class AppModule { }
