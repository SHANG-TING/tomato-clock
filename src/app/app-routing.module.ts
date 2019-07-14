import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'tomato',
    loadChildren: () =>
      import('./tomato/tomato.module').then(m => m.TomatoModule),
  },
  {
    path: '**',
    redirectTo: 'tomato',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
