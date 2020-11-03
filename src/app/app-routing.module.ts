import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Components
import {HomeComponent} from './home/home.component';
import {InstructionsComponent} from './home/instructions/instructions.component';
import {TestsComponent} from './tests/tests.component';

const routes: Routes = [
  {path: '',component:HomeComponent},
  {path: 'instructions',component: InstructionsComponent},
  {path: 'tests',component:TestsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
