import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MasterComponent} from "./pages/master/master.component";
import {UserListComponent} from "./components/users/user-list/user-list.component";
import {UserEditComponent} from "./components/users/user-edit/user-edit.component";

const routes: Routes = [
  {path: '', redirectTo: '/admin', pathMatch: 'full'},

  {
      path: 'admin',
      component: MasterComponent,
      children: [
        { path: 'users', component: UserListComponent},
        { path: 'users/:id/edit', component: UserEditComponent}
      ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
