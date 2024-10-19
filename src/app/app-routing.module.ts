import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentcrudComponent } from './studentcrud/studentcrud.component';

const routes: Routes = [
  { path: '', redirectTo: '/studentcrud', pathMatch: 'full' },
  { path: 'studentcrud', component: StudentcrudComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
