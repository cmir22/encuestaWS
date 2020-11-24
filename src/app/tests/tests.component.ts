import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';


interface CI {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-tests',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.css']
})

export class TestsComponent implements OnInit {

  cis: CI[] = [
    { value: 'bajo', viewValue: 'Bajo' },
    { value: 'alerta', viewValue: 'Alerta' },
    { value: 'promedio', viewValue: 'Promedio' },
    { value: 'alto', viewValue: 'Alto' }
  ];

  abts: CI[] = [
    { value: '1', viewValue: '1' },
    { value: '2', viewValue: '2' },
    { value: '3', viewValue: '3' },
    { value: '4', viewValue: '4' }
  ];

  constructor(private db: AngularFirestore) {
  }

  setData() {
    let datos = (<HTMLInputElement>document.querySelector('#datos')).value;
    this.db.collection('informacion').doc().set({
      datos: datos

    })
  }

  ngOnInit(): void {
    /*
       const form = document.querySelector("#form")
       form.addEventListener('submit', e => {
         e.preventDefault();
        this.setData()
         console.log('clickeo')
       })
       */

  }


}
