<<<<<<< HEAD
import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(/*private elementRef: ElementRef*/) { }

  ngOnInit(): void {
  }

}
=======
import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
   //this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#E6D3ED';
  }

}
>>>>>>> 9de37d70bf4f8852aa6d3bf59308fe7b745ab07f
