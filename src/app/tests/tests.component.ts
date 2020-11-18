import { Component, OnInit } from '@angular/core';

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
    {value: 'bajo', viewValue: 'Bajo'},
    {value: 'alerta', viewValue: 'Alerta'},
    {value: 'promedio', viewValue: 'Promedio'},
    {value: 'alto', viewValue: 'Alto'}
  ];

  abts: CI[] = [
    {value: '1', viewValue: '1'},
    {value: '2', viewValue: '2'},
    {value: '3', viewValue: '3'},
    {value: '4', viewValue: '4'}
  ];

  constructor() { }

  ngOnInit(): void {
  }



}
