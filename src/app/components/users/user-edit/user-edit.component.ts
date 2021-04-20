import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, RouterLinkActive} from "@angular/router";
import {UserService} from "../../../services/user.service";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  editUserForm!: FormGroup;
  constructor(private router: ActivatedRoute,
              private userService: UserService,
              private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.editUserForm = this.fb.group({
      id: [''],
      name: [''],
      address: [''],
      phone: [''],
    })
    // @ts-ignore
    let id = +this.router.snapshot.paramMap.get('id');
    this.editUserForm.patchValue(this.getUser(id)[0]);
  }

  getUser(id: number) {
    return this.userService.findById(id);
  }

}
