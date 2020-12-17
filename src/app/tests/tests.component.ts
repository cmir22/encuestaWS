import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import Swal from 'sweetalert2'

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
  percenil: any = 0;
  percenilResultado: any = 0;

  constructor(private db: AngularFirestore) {
  }

  getPerceptil(percenilEstatura, percenilPeso, percenilEdad) {
    var percenilEstaturaCentimetros = (percenilEstatura / 100);
    if (percenilEdad <= 18) {
      this.percenil = (percenilPeso / (percenilEstaturaCentimetros * percenilEstaturaCentimetros))
      this.percenilResultado = this.percenil.toFixed(2);
    } else {
      this.percenil = "El Niño es mayor de edad";
    }
  }

  setData(fecha, casaHogar, codigoNNA, primerNombreNNA, fechaNacimiento, curp, gradoEscolar
    , diagnosticoMedico, peso, diagnosticoPsicologico, percenil,percenilEstatura,percenilEdad) {
    const customID = this.db.createId();
    this.db.collection('informacion').doc(`${customID}`).set({
      Fecha: fecha,
      CasaHogar: casaHogar,
      CodigoNNA: codigoNNA,
      PrimerNombreNNA: primerNombreNNA,
      FechaNacimiento: fechaNacimiento,
      CURP: curp,
      GradoEscolar: gradoEscolar,
      DiagnosticoMedico: diagnosticoMedico,
      Peso: peso,
      DiagnosticoPsicologico: diagnosticoPsicologico,
      CI: this.ci,
      LectoEscritura: this.lectoEscritura,
      Raven: this.raven,
      ENI: this.eni,
      Detector: this.detector,
      HabilidadesSociales: this.habilidadesSociales,
      ResultadosEvaluacionesABT: this.resultadosEvaluacionesABT,
      id: customID,
      Percenil: percenil,
      Estatura: percenilEstatura,
      Edad: percenilEdad
    })
  }

  ngOnInit(): void {

    const formElement = (<HTMLFormElement>document.querySelector("#form"))
    formElement.addEventListener('submit', async (e) => {
      let fecha = (<HTMLInputElement>document.querySelector('#fecha')).value;
      let casaHogar = (<HTMLInputElement>document.querySelector('#casaHogar')).value;
      let codigoNNA = (<HTMLInputElement>document.querySelector('#codigoNNA')).value;
      let primerNombreNNA = (<HTMLInputElement>document.querySelector('#primerNombreNNA')).value;
      let fechaNacimiento = (<HTMLInputElement>document.querySelector('#fechaNacimiento')).value;
      let curp = (<HTMLInputElement>document.querySelector('#curp')).value;
      let gradoEscolar = (<HTMLInputElement>document.querySelector('#gradoEscolar')).value;
      let diagnosticoMedico = (<HTMLInputElement>document.querySelector('#diagnosticoMedico')).value;
      let peso = (<HTMLInputElement>document.querySelector('#peso')).value;
      let diagnosticoPsicologico = (<HTMLInputElement>document.querySelector('#diagnosticoPsicologico')).value;

      var percenilEstatura = (<HTMLInputElement>document.querySelector('#estatura')).value;
      var percenilPeso = (<HTMLInputElement>document.querySelector('#peso')).value;
      var percenilEdad = (<HTMLInputElement>document.querySelector('#edad')).value;
      await this.getPerceptil(percenilEstatura, percenilPeso, percenilEdad)
      e.preventDefault();
      //  SweetAler
      Swal.fire({
        title: 'Finalizar',
        text: "¿Estas Seguro?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#633c88',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Aceptar'
      }).then((result) => {
        if (result.isConfirmed) {
          this.setData(fecha, casaHogar, codigoNNA, primerNombreNNA, fechaNacimiento, curp, gradoEscolar, diagnosticoMedico, peso, diagnosticoPsicologico, this.percenilResultado,percenilEstatura,percenilEdad);
          formElement.reset();
          Swal.fire(
            'Finalizado!',
            'Bien Hecho.',
            'success'
          )
        }
      })
      // End SweetAler
    })


  }

}
