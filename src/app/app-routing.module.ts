<<<<<<< HEAD
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Components
import {HomeComponent} from './home/home.component';
import {InstructionsComponent} from './home/instructions/instructions.component';
import {TestsComponent} from './tests/tests.component';
import {LoginComponent} from './admin/login/login.component';
import { DataComponent } from "./admin/data/data.component";

const routes: Routes = [
  {path: '',component:HomeComponent},
  {path: 'login',component: InstructionsComponent},
  {path: 'tests',component:TestsComponent},
  // {path: 'login', component: LoginComponent},
  {path: 'data',component:DataComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
=======
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Components
import { HomeComponent } from './home/home.component';
import { InstructionsComponent } from './home/instructions/instructions.component';
import { TestsComponent } from './tests/tests.component';
//import { LoginComponent } from './admin/login/login.component';
import { DataComponent } from "./admin/data/data.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: InstructionsComponent },
  { path: 'tests', component: TestsComponent },
 // { path: 'login', component: LoginComponent },
  { path: 'data', component: DataComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
>>>>>>> 9de37d70bf4f8852aa6d3bf59308fe7b745ab07f
