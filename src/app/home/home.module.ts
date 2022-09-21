import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { LottieModule } from 'ngx-lottie';
import { ComingSoonComponent } from './components/coming-soon/coming-soon.component';
import { CountDownTimerComponent } from './components/coming-soon/count-down-timer/count-down-timer.component';

@NgModule({
  declarations: [HomeComponent, ComingSoonComponent, CountDownTimerComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    LottieModule,
    FontAwesomeModule,
    MatToolbarModule,
    MatDividerModule,
    MatDividerModule,
    MatIconModule,
    MatButtonModule,
  ],
})
export class HomeModule {}
