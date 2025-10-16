import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { api } from 'src/api/api';
import { SharedIonicModule } from 'src/app/shared-ionic.module';
import { Register } from 'src/model/aurevia';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
  imports: [ReactiveFormsModule, SharedIonicModule],
})
export class RegisterFormComponent implements OnInit {
  private readonly fb = inject(FormBuilder);

  public registerForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    username: ['', [Validators.required]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
  });

  ngOnInit() {}

  async onSubmit() {
    try {
      const res = await this.register({
        email: this.registerForm.value.email ?? '',
        username: this.registerForm.value.username ?? '',
        password: this.registerForm.value.password ?? '',
      });
      console.log('Registro OK', res);
    } catch (e) {
      console.error('Error registro', e);
    }
  }

  register = async (payload: Register) => {
    try {
      const response = await api.post('/auth/register', payload);
      return response.data;
    } catch (error: any) {
      alert('Error en el catch registro: ' + error?.response?.data?.error?.message);
    }
  };
}
