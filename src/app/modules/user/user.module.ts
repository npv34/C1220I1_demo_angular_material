import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserListComponent} from "../../components/users/user-list/user-list.component";
import {UserEditComponent} from "../../components/users/user-edit/user-edit.component";
import {MatFormFieldModule} from "@angular/material/form-field";
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatTableModule} from "@angular/material/table";
import {RouterModule, Routes} from "@angular/router";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatSortModule} from "@angular/material/sort";

const routes: Routes = [
  {
    path: '',
    component: UserListComponent
  },
  {
    path: ':id/edit',
    component: UserEditComponent
  }
]

@NgModule({
  declarations: [
    UserListComponent,
    UserEditComponent
  ],
    imports: [
        CommonModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        MatInputModule,
        MatButtonModule,
        MatTableModule,
        RouterModule,
        MatPaginatorModule,
        RouterModule.forChild(routes),
        MatSortModule
    ]
})
export class UserModule { }
