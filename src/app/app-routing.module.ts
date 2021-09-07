import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'test', loadChildren: () => import('./test/test.module').then(m => m.TestModule) },
  { path: 'starships', loadChildren: () => import('./starships/starships.module').then(m => m.StarshipsModule) },
  { path: 'people', loadChildren: () => import('./people/people.module').then(m => m.PeopleModule) },
  { path: 'planets', loadChildren: () => import('./planets/planets.module').then(m => m.PlanetsModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
