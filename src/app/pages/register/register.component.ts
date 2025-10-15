import { Component, OnInit } from '@angular/core';
import { api } from 'src/api/api';
import { Register } from 'src/model/aurevia';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
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
