import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { UsersService } from './_services/users.service';
import { PollsService } from './_services/polls.service';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateComponent } from './create/create.component';
import { PollComponent } from './poll/poll.component';
import { LogoutComponent } from './logout/logout.component';

import { SearchPipe } from './search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    CreateComponent,
    PollComponent,
    LogoutComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [UsersService, PollsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
