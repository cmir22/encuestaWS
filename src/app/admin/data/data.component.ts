import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import Swal from 'sweetalert2'



@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})

export class DataComponent implements OnInit {

  constructor(private db: AngularFirestore) {
  }



  ngOnInit(): void {
    this.getData();

  }

  deleteElement(id) {

    Swal.fire({
      title: 'Borrar',
      text: "¿Estas Seguro?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#633c88',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Aceptar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.db.collection("informacion").doc(`${id}`).delete().then(function () {
          console.log("Document successfully deleted!");
        }).catch(function (error) {
          console.error("Error removing document: ", error);
        });
        Swal.fire(
          'Eliminado!',
          'El dato ha sido eliminado.',
          'success'
        )
      }
    })

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


}


