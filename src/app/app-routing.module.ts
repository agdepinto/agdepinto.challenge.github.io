import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GridComponent } from './grid/grid.component';
import { FormComponent } from './form/form.component';
import { OptionsComponent } from './options/options.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'grid', component: GridComponent },
  { path: 'form', component: FormComponent},
  { path: 'options', component: OptionsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
