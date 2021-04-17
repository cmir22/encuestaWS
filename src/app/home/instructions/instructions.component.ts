<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';


import firebase from 'firebase'
@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.css']
})
export class InstructionsComponent implements OnInit {

  constructor(private afsAuth: AngularFireAuth,private router: Router) { }

  loginByEmail(email,password) {
    this.afsAuth.signInWithEmailAndPassword(email,password)
    .then((user) => {
      this.router.navigate(['/tests'])
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
    });
  }

  ngOnInit(): void {
    var form = document.getElementById('form');

    form.addEventListener('submit', async element => {
      element.preventDefault();
      let email = (<HTMLInputElement>document.getElementById('email')).value;
      let password = (<HTMLInputElement>document.getElementById('password')).value;
      this.loginByEmail(email,password)
      console.log('jalo', email, password)
    })
  }



}
=======
import { Component, OnInit } from '@angular/core';
import firebase from '@firebase/app'
import '@firebase/auth'

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.css']
})
export class InstructionsComponent implements OnInit {

  login(email, password) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((user) => {
        console.log('haz iniciado sesion')
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
      });
  }

  constructor() { }

  ngOnInit(): void {
    var form = (<HTMLFormElement>document.querySelector('#form'))

    form.addEventListener('submit', (e) => {
      e.preventDefault()
      var email = (<HTMLInputElement>document.querySelector('#email')).value
      var password = (<HTMLInputElement>document.querySelector('#password')).value
      this.login(email, password)
    })
  }

}
>>>>>>> 9de37d70bf4f8852aa6d3bf59308fe7b745ab07f
