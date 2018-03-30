import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { SiginComponent } from './sigin/sigin.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { SigupComponent } from './sigup/sigup.component';

const routes: Routes = [
  { path: 'signin', component: SiginComponent, data: {title: 'Sign-in'} },
  { path: 'signup', component: SigupComponent, data: {title: 'Sign-up'} },
  { path: 'reset-password', component: ResetPasswordComponent, data: {title: 'Reset password'} }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    SharedModule
  ],
  declarations: [SiginComponent, ResetPasswordComponent, SigupComponent]
})
export class AuthModule { }
