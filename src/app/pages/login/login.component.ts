import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup
  message: string = '';
  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: [''],
      password: ['']
    })
  }

  submit() {
    let data = this.loginForm.value;
    this.authService.login(data).subscribe((res) => {
        if (res.status === 'success') {
          localStorage.setItem('token', res.data.token);
          this.router.navigate(['admin']);
        } else {
          console.log(res)
          this.message = res.message;
        }
    })
  }
}
