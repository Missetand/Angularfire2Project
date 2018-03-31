import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';

import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserService } from './user.service';
import { UserListComponent } from './user-list/user-list.component';
import { UserListItemComponent } from './user-list-item/user-list-item.component';


const routes: Routes = [
  {path: 'me', component: UserDashboardComponent, data: {title: 'Dashboard'}},
  {path: 'users', component: UserListComponent, data: {title: 'Users'}},
  {path: 'users/:id', component: UserDetailComponent, data: {title: 'Profile'}},

];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  exports: [UserListComponent],
  declarations: [UserDashboardComponent, UserDetailComponent, UserListComponent, UserListItemComponent],
  providers: [UserService]
})
export class UserModule { }
