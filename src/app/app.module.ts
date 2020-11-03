import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Angular Material
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
// End Angular Material

import { HomeComponent } from './home/home.component';
import { InstructionsComponent } from './home/instructions/instructions.component';
import { TestsComponent } from './tests/tests.component';

const angularMaterial =[
  MatButtonModule,
  MatInputModule,
  MatFormFieldModule,
  MatToolbarModule,
  MatIconModule
]


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InstructionsComponent,
    TestsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    angularMaterial
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
