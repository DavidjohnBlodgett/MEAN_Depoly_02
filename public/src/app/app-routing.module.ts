import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateComponent } from './create/create.component';
import { PollComponent } from './poll/poll.component';
import { LogoutComponent } from './logout/logout.component';


const routes: Routes = [
    { path: '', pathMatch: 'full', component: LoginComponent },
    { path: 'dashboard', pathMatch: 'full', component: DashboardComponent },
    { path: 'create', pathMatch: 'full', component: CreateComponent },
    { path: 'polls/:id', component: PollComponent },
    // { path: 'poll/:id', component: PollComponent, data: [{isProd: true}] },
    { path: 'logout', pathMatch: 'full', component: LogoutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
