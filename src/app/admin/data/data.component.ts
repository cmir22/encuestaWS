import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})



export class DataComponent implements OnInit {
  
  constructor(private firestore: AngularFirestore) {

  }

  datos: any[] = []
  getData() {
    
    this.firestore
      .collection("informacion")
      .get()
      .subscribe((querySnapshot) => {
        querySnapshot.docs.forEach((doc) => {
          this.datos.push(doc.data());
        });
      });
  }

  ngOnInit(): void {
    this.getData();

  }

}


