import { Component, inject, OnInit } from '@angular/core';
import { api } from 'src/lib/api';
import { ActivatedRoute } from '@angular/router';
import { SharedIonicModule } from 'src/app/shared-ionic.module';
import { logoIonic } from 'ionicons/icons';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  imports: [SharedIonicModule],
})
export class ProfileComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);

  user = {
    id: 0,
    username: '',
    email: '',
    hashed_password: '',
  };

  constructor() {}

  ngOnInit() {
    const email = this.route.snapshot.paramMap.get('email') || '';
    if (email) {
      this.fetchUserByEmail(email);
    }
  }

  fetchUserByEmail = async (email: string) => {
    try {
      const response = await api.get(`auth/email/${email}`);

      console.log(response.data);

      this.user = response.data;
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };
}
