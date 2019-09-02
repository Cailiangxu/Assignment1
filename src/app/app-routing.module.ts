import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatComponent } from './chat/chat.component';
import {LoginComponent} from './login';
import {DashboardComponent} from './dashboard/dashboard.component';
// import {AuthGuard} from './helpers/auth.guard';
import { ChannelsComponent } from './manage/channels/channels.component';
import { GroupsComponent } from './manage/groups/groups.component';
import { ManageComponent } from './manage/manage.component';
import { UserDetailsComponent } from './manage/users/user-details/user-details.component';
import { UserEditComponent } from './manage/users/user-edit/user-edit.component';
import { UsersComponent } from './manage/users/users.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  // { path: '', component: HomeComponent, canActivate: [AuthGuard] },

  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'chat', component: ChatComponent},
  { path: 'manage',
    component: ManageComponent,
    children: [
      { path: 'user',
        children: [
          { path: 'edit/:id', component: UserEditComponent },
          { path: 'new', component: UserEditComponent },
          { path: '', component: UsersComponent, pathMatch: 'full' },
          // { path: 'view/:id', component: UserDetailsComponent },
        ]},
      { path: 'group', component: GroupsComponent },
      { path: 'channel', component: ChannelsComponent },
    ]
  },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
