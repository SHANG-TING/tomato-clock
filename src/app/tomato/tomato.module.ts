import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { TomatoAnalyticsComponent } from './tomato-analytics/tomato-analytics.component';
import { TomatoClockComponent } from './tomato-clock/tomato-clock.component';
import { TomatoListComponent } from './tomato-list/tomato-list.component';
import { TomatoMainComponent } from './tomato-main/tomato-main.component';
import { TomatoRoutingModule } from './tomato-routing.module';
import { TomatoComponent } from './tomato.component';

@NgModule({
  imports: [CommonModule, FormsModule, ChartsModule, TomatoRoutingModule],
  declarations: [
    TomatoMainComponent,
    TomatoListComponent,
    TomatoComponent,
    TomatoClockComponent,
    TomatoAnalyticsComponent,
  ],
})
export class TomatoModule {}
