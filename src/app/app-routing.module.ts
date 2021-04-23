import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MasterComponent} from "./pages/master/master.component";
import {AuthGuard} from "./auth/auth.guard";
import {LoginComponent} from "./pages/login/login.component";

// @ts-ignore
// @ts-ignore
const routes: Routes = [
  {path: '', redirectTo: '/admin', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {
    path: 'admin',
    component: MasterComponent,
    children: [
      {
        path: 'users',
        loadChildren: (() => import('./modules/user/user.module').then(m => m.UserModule))
      },
    ],
   canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
