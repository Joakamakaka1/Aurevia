import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { SharedIonicModule } from 'src/app/shared-ionic.module';
import { Register } from 'src/model/aurevia';
import { AuthProvider } from 'src/provider/authProvider';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
  imports: [ReactiveFormsModule, SharedIonicModule],
})
export class RegisterFormComponent implements OnInit {
  private readonly fb = inject(FormBuilder);
  private readonly authProvider = inject(AuthProvider);

  public registerForm = this.fb.group({
    // ... (keep middle same, I'm just replacing the top and bottom if needed, or whole file to be safe)
    // Wait, I should replace chunks.
    email: ['', [Validators.required, Validators.email]],
    username: ['', [Validators.required]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
  });

  showPassword = false;

  ngOnInit() {}

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  async onSubmit() {
    try {
      const res = await this.register({
        email: this.registerForm.value.email ?? '',
        username: this.registerForm.value.username ?? '',
        password: this.registerForm.value.password ?? '',
        role: 'user',
      });
      console.log('Registro OK', res);
    } catch (e) {
      console.error('Error registro', e);
    }
  }

  register = async (payload: Register) => {
    try {
      const response = await this.authProvider.register(payload);
      return response;
    } catch (error: any) {
      alert(
        'Error en el catch registro: ' + error?.response?.data?.error?.message
      );
    }
  };
}
