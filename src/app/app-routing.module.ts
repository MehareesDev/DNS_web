import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/*** Components **/
import {HomepageComponent} from './homepage/homepage.component';


/*** AUth Guard **/
import {AuthGuard} from '../guards/auth-guard.service';


const routes: Routes = [
  {
    path: '',
    component: HomepageComponent
  },
  {path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule)},
  {
    path: 'dashboard',
    canActivate: [AuthGuard],
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
