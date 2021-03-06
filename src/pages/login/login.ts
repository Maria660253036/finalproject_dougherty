import { Component } from '@angular/core';
import { IonicPage, LoadingController, AlertController } from 'ionic-angular';
import { AuthService } from '../../services/authservice';
import { NgForm } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(private authService: AuthService,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController) {
}

  onSignin(form: NgForm) {
    const loading = this.loadingCtrl.create({
    content: 'Signing you in...'
    });
    loading.present();
    this.authService.signin(form.value.email, form.value.password)
    .then(data => {
    loading.dismiss();
    })
    .catch(error => {
    loading.dismiss();
    const alert = this.alertCtrl.create({
    title: 'Signin failed',
    message: error.message,
    buttons: ['Ok']
    });
    alert.present();
    });
  }

}
