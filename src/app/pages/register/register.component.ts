import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { api } from 'src/lib/api';
import { RegisterFormComponent } from 'src/app/components/register-form/register-form.component';
import { SharedIonicModule } from 'src/app/shared-ionic.module';
import { Register } from 'src/model/aurevia';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  imports: [RegisterFormComponent, SharedIonicModule, CommonModule],
})
export class RegisterComponent implements OnInit {
  private router: Router = inject(Router);

  ngOnInit() { }

  redirigirLogin() {
    this.router.navigate(['/login']);
  }
}
