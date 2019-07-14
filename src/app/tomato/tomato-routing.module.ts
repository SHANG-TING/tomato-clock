import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TomatoAnalyticsComponent } from './tomato-analytics/tomato-analytics.component';
import { TomatoListComponent } from './tomato-list/tomato-list.component';
import { TomatoMainComponent } from './tomato-main/tomato-main.component';
import { TomatoComponent } from './tomato.component';

const routes: Routes = [
  {
    path: '',
    component: TomatoComponent,
    children: [
      {
        path: 'main',
        component: TomatoMainComponent,
      },
      {
        path: 'todo-list',
        component: TomatoListComponent,
      },
      {
        path: 'analytics',
        component: TomatoAnalyticsComponent,
      },
      {
        path: '**',
        redirectTo: 'main',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TomatoRoutingModule {}
