import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'test', loadChildren: () => import('./test/test.module').then(m => m.TestModule) },
  { path: 'starships', loadChildren: () => import('./starships/starships.module').then(m => m.StarshipsModule) },
  { path: 'people', loadChildren: () => import('./people/people.module').then(m => m.PeopleModule) },
  { path: 'planets', loadChildren: () => import('./planets/planets.module').then(m => m.PlanetsModule) },
  { path: '',   redirectTo: '/', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
