import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import Swal from 'sweetalert2'
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
import { AngularFireAuth } from '@angular/fire/auth';
import { NavigationEnd, Router } from '@angular/router';

const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';

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

  public exportAsExcelFile(json: any[], excelFileName: string): void {
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(json);
    const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    this.saveAsExcelFile(excelBuffer, excelFileName);
  }
  private saveAsExcelFile(buffer: any, fileName: string): void {
    const data: Blob = new Blob([buffer], { type: EXCEL_TYPE });
    FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
  }

  constructor(private db: AngularFirestore, private afsAuth: AngularFireAuth, private router: Router) {
  }

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

  navigate() {
    this.router.navigate(['/login'])
  }


  ngOnInit(): void {


    this.afsAuth.onAuthStateChanged(function (user) {
      if (user) {
        console.log('Si tiene cuenta')
      } else window.location.href = 'login'
    });


    this.getData();
  }

  excelDescargar() {
    this.exportAsExcelFile(this.datos, 'Create_Purpose_Database');
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