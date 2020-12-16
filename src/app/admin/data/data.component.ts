import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import Swal from 'sweetalert2'
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';


@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})

export class DataComponent implements OnInit {

  datos: any[] = [];
  displayedColumns: string[] = ['position'];
  //dataSource = new MatTableDataSource(this.datos);
  dataSource: MatTableDataSource<any>;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private db: AngularFirestore) {
  }

  ngOnInit(): void {
    //this.getData();
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

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngAfterViewInit(): void {
    this.db.collection<any>('informacion').valueChanges().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    })
    
  }


}