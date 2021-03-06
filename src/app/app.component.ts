import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private auth: AuthService
  ) {
    console.log('initializing');
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
    //   return this.auth.login();
    // })
    // .then(() => {
      // console.log('success');
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    }).catch(err => {
      console.error(err);
    });
  }
}
