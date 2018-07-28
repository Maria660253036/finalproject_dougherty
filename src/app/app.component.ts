import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import firebase from 'firebase';
import { TodolistPage } from '../pages/todolist/todolist';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;
  isAuthenticated = false;

  constructor(
    platform: Platform, 
    statusBar: StatusBar, 
    splashScreen: SplashScreen) {
      firebase.initializeApp({
        apiKey: "AIzaSyDwiFl__lWJZHM-aiG3So-O9leaLKQpUYo",
        authDomain: "todolistapp-8b63f.firebaseapp.com",
      });
      firebase.auth().onAuthStateChanged(user => {
        if(user) {
          this.isAuthenticated = true;
        this.rootPage = TodolistPage;
        }
        else {
        this.isAuthenticated = false;
        this.rootPage = HomePage;
        }
    });
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

}

