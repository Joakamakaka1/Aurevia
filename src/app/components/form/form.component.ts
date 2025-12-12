import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { api } from 'src/lib/api';
import { Router } from '@angular/router';
import { SharedIonicModule } from 'src/app/shared-ionic.module';
import { Login } from 'src/model/aurevia';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  imports: [ReactiveFormsModule, SharedIonicModule, CommonModule],
})
export class FormComponent implements OnInit {
  private readonly fb = inject(FormBuilder);
  private readonly router = inject(Router);

  public loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    hashed_password: ['', [Validators.required, Validators.minLength(0)]],
  });

  showPassword = false;

  ngOnInit() {}

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.login({
        email: this.loginForm.value.email ?? '',
        hashed_password: this.loginForm.value.hashed_password ?? '',
      });
    }
  }

  login = async (payload: Login) => {
    try {
      const response = await api.post('/auth/login', payload);
      await this.router.navigate(['/profile/' + payload.email]); // Navigate to profile with email param
      return response.data;
    } catch (error: any) {
      alert(
        'Error en el catch login: ' + error?.response?.data?.error?.message
      );
    }
  };
}
