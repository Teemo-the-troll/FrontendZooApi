import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DetailComponent} from './detail/detail.component';
import {CaretakersComponent} from './caretakers/caretakers.component';
import {NotFoundComponent} from './not-found/not-found.component';

const routes: Routes = [
  {path: 'detail/:id', component: DetailComponent},
  {path: 'caretakers', component: CaretakersComponent},
  {path: '404', component: NotFoundComponent},
  { path: '',   redirectTo: 'caretakers', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
