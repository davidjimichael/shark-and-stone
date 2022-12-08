import { Component } from '@angular/core';
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'shark-and-stone';
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  app = initializeApp({
    apiKey: 'AIzaSyCuf0UFZBI4RTWSmzD6GW8eyZJAdNlR3Rg',
    authDomain: 'shark-and-stone.firebaseapp.com',
    projectId: 'shark-and-stone',
    storageBucket: 'shark-and-stone.appspot.com',
    messagingSenderId: '241190659185',
    appId: '1:241190659185:web:57957e8a6619bc2b06a7d0',
    measurementId: 'G-KWWECZDW4W',
  });
  analytics = getAnalytics(this.app);
}
