import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ServicesPage } from '../pages/services/services';
import { RedditsPage } from '../pages/reddits/reddits';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import{DetailsPage} from '../pages/details/details'
import{BrowserPage} from '../pages/browser/browser'

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ServicesPage,
    RedditsPage,
    DetailsPage,
    BrowserPage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ServicesPage,
    RedditsPage,
    TabsPage,
    DetailsPage,
    BrowserPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
