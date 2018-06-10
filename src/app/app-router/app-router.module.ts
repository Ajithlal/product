import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from '../welcome/welcome.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot([
      {path: 'welcome', component: WelcomeComponent },
      {path: '', redirectTo : 'welcome', pathMatch: 'full'}
    ]),
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRouterModule { }
