import {Component} from '@angular/core';
import { NavController, Loading, LoadingController } from 'ionic-angular';
import { Http, Response, Headers, HTTP_PROVIDERS } from '@angular/http';

import { AboutPage } from '../about/about';

@Component({
  templateUrl: 'build/pages/contact/contact.html'
})
export class ContactPage {
  loading: Loading;
  
  constructor(private _http: Http, private nav: NavController, private loadingController: LoadingController) {
  }

  ionViewDidEnter() {
    this.showLoading();

    this._http.get('/index.html')
      .subscribe(data => {
        console.log(data);
        this.loading.dismiss();
        this.nav.push(AboutPage);
    }, error => {
      console.log(error);
      this.loading.dismiss();
      this.nav.push(AboutPage);
    });
  }

  showLoading() {
    this.loading = this.loadingController.create({
      content: "Loading..."
    });
    this.loading.present();
  }
}
