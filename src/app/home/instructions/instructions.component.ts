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
