import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedIonicModule } from 'src/app/shared-ionic.module';
import { Login } from 'src/model/aurevia';
import { AuthProvider } from 'src/provider/authProvider';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  imports: [ReactiveFormsModule, SharedIonicModule, CommonModule],
})
export class FormComponent implements OnInit {
  private readonly router = inject(Router);
  private readonly fb = inject(FormBuilder);
  private readonly authProvider = inject(AuthProvider); // Inject AuthProvider

  public loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(0)]],
  });

  showPassword = false;

  ngOnInit() { }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.login({
        email: this.loginForm.value.email ?? '',
        password: this.loginForm.value.password ?? '',
      });
    }
  }

  login = async (payload: Login) => {
    try {
      const data = await this.authProvider.login(payload); // Use AuthProvider
      if (data) {
        await this.router.navigate(['/tabs']);
        return data;
      }
    } catch (error: any) {
      const errorMessage = error?.response?.data?.error?.message
        || error?.message
        || 'Error desconocido durante el login';
      alert('Error en el catch login: ' + errorMessage);
    }
  };
}
