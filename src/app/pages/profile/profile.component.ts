import { Component, OnInit } from '@angular/core';
import { api } from 'src/lib/api';
import { User } from 'src/model/aurevia';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent  implements OnInit {

  user = {
    id: 0,
    username: '',
    email: '',
    hashed_password: '',
  };

  constructor() { }

  ngOnInit() {
    this.fetchUser(this.user);
  }

  fetchUser = async(payload: User) => {
    try {
      const response = await api.get(`auth/email/${'a2@gmail.com'}`)

      console.log(response.data);

      this.user = response.data;
      return response.data

    } catch (error) {
      console.log(error);
    }

  }
}
