import { variable } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';


@Component({
  selector: 'app-tests',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.css']
})

export class TestsComponent implements OnInit {

  ci = "";
  lectoEscritura = "";
  raven = "";
  eni = "";
  detector = "";
  habilidadesSociales = "";
  resultadosEvaluacionesABT = "";


  constructor(private db: AngularFirestore) {
  }

  setData(fecha, casaHogar, codigoNNA, primerNombreNNA, fechaNacimiento, curp, gradoEscolar
    , diagnosticoMedico, peso, talla, diagnosticoPsicologico) {
    this.db.collection('informacion').doc().set({
      Fecha: fecha,
      CasaHogar: casaHogar,
      CodigoNNA: codigoNNA,
      PrimerNombreNNA: primerNombreNNA,
      FechaNacimiento: fechaNacimiento,
      CURP: curp,
      GradoEscolar: gradoEscolar,
      DiagnosticoMedico: diagnosticoMedico,
      Peso: peso,
      Talla: talla,
      DiagnosticoPsicologico: diagnosticoPsicologico,
      CI: this.ci,
      LectoEscritura: this.lectoEscritura,
      Raven: this.raven,
      ENI: this.eni,
      Detector: this.detector,
      HabilidadesSociales: this.habilidadesSociales,
      ResultadosEvaluacionesABT: this.resultadosEvaluacionesABT

    })
  }

  ngOnInit(): void {

    const form = document.querySelector("#form")
    form.addEventListener('submit', e => {
      let ci = "";
      let fecha = (<HTMLInputElement>document.querySelector('#fecha')).value;
      let casaHogar = (<HTMLInputElement>document.querySelector('#casaHogar')).value;
      let codigoNNA = (<HTMLInputElement>document.querySelector('#codigoNNA')).value;
      let primerNombreNNA = (<HTMLInputElement>document.querySelector('#primerNombreNNA')).value;
      let fechaNacimiento = (<HTMLInputElement>document.querySelector('#fechaNacimiento')).value;
      let curp = (<HTMLInputElement>document.querySelector('#curp')).value;
      let gradoEscolar = (<HTMLInputElement>document.querySelector('#gradoEscolar')).value;
      let diagnosticoMedico = (<HTMLInputElement>document.querySelector('#diagnosticoMedico')).value;
      let peso = (<HTMLInputElement>document.querySelector('#peso')).value;
      let talla = (<HTMLInputElement>document.querySelector('#talla')).value;
      let diagnosticoPsicologico = (<HTMLInputElement>document.querySelector('#diagnosticoPsicologico')).value;
      e.preventDefault();
      this.setData(fecha, casaHogar, codigoNNA, primerNombreNNA, fechaNacimiento, curp, gradoEscolar, diagnosticoMedico, peso, talla, diagnosticoPsicologico);

    })


  }


}
