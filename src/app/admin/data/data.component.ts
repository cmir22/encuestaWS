import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})

export class DataComponent implements OnInit {



  constructor(private db: AngularFirestore) {
  }

  datos: any[] = [];
  getData() {
    this.db
      .collection("informacion")
      .get()
      .subscribe((querySnapshot) => {
        querySnapshot.docs.forEach((doc) => {
          this.datos.push(doc.data());
        });
      });
  }

  getDeleteButtons(){
    const btnsDelete = document.querySelectorAll('.btnDelete')
    btnsDelete.forEach(btn => {
      btn.addEventListener('click', () =>{
        console.log("Clickeado")
      })
    })
    
  }

  ngOnInit(): void {
    this.getData();
    this.getDeleteButtons();


  }

}


