import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StatRollInputComponent } from './components/stat-roll-input/stat-roll-input.component';

const routes: Routes = [
  { path: 'statRollInput', component: StatRollInputComponent
    //path: 'auth', component: AuthComponent },
  //{ path: 'reportCluster', component: ReportClusterComponent 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }