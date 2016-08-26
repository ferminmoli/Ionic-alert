import {Component} from '@angular/core';
import { NavController, Loading, LoadingController } from 'ionic-angular';
import { Http, Response, Headers, HTTP_PROVIDERS } from '@angular/http';

@Component({
  templateUrl: 'build/pages/about/about.html'
})
export class AboutPage {
  loading: Loading;

  constructor(private _http: Http, private nav: NavController, private loadingController: LoadingController) {
  }

  ionViewDidEnter() {
    // setTimeout(() => {
    //   this.nav.popToRoot();
    // }, 1000);
  }

  popToRoot() {
    this.showLoading();

    this._http.get('/index.html')
      .subscribe(data => {
        console.log(data);
        this.loading.dismiss();
        this.nav.popToRoot();
    }, error => {
      console.log(error);
      this.loading.dismiss();
      this.nav.popToRoot();
    });
  }

  showLoading() {
    this.loading = this.loadingController.create({
      content: "Loading..."
    });
    this.loading.present();
  }
}
