import { DataSource } from '@angular/cdk/table';
import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {

  datos: any[] = [];
  displayedColumns: string[] = ['position'];
  //dataSource = new MatTableDataSource(this.datos);
  dataSource: MatTableDataSource<any>;
  @ViewChild(MatSort) sort: MatSort;


applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();
}

  constructor(private db: AngularFirestore) { }


  // Here we get the al data from the angular collection
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

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.db.collection<any>('informacion').valueChanges().subscribe(data =>{
      this.dataSource = new MatTableDataSource(data);
    })
  }

  ngOnInit(): void {

  }

}
