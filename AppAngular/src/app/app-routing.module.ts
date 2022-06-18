import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PessoasComponent } from './components/pessoas/pessoas.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'pessoas', component:PessoasComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
