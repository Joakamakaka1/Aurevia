import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RegisterFormComponent } from 'src/app/components/register-form/register-form.component';
import { SharedIonicModule } from 'src/app/shared-ionic.module';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  imports: [RegisterFormComponent, SharedIonicModule, CommonModule],
})
export class RegisterComponent implements OnInit {
  name = '';
  email = '';
  password = '';

  constructor() {}

  ngOnInit() {}

  async onSubmit() {
    try {
      const res = await this.register({
        name: this.name,
        email: this.email,
        password: this.password,
      });
      console.log('Registro OK', res);
    } catch (e) {
      console.error('Error registro', e);
    }
  }

  fetchRegister() {}

  register = async (payload: Register) => {
    const response = await api.post('/auth/register', payload);
    return response.data;
  };
}
