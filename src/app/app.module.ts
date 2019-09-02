import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { ManageComponent } from './manage/manage.component';
import { UsersComponent } from './manage/users/users.component';
import { GroupsComponent } from './manage/groups/groups.component';
import { ChannelsComponent } from './manage/channels/channels.component';
import { ChatComponent } from './chat/chat.component';
import { UserListComponent } from './manage/users/user-list/user-list.component';
import { UserDetailsComponent } from './manage/users/user-details/user-details.component';
import { UserEditComponent } from './manage/users/user-edit/user-edit.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
// @ts-ignore
import {NgSelectModule} from '@ng-select/ng-select';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    HeaderComponent,
    ManageComponent,
    UsersComponent,
    GroupsComponent,
    ChannelsComponent,
    ChatComponent,
    UserListComponent,
    UserDetailsComponent,
    UserEditComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    NgSelectModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
