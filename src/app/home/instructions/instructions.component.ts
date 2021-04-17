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
