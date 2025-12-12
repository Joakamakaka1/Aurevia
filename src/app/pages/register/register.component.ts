import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterFormComponent } from 'src/app/components/register-form/register-form.component';
import { SharedIonicModule } from 'src/app/shared-ionic.module';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  imports: [RegisterFormComponent, SharedIonicModule, CommonModule],
})
export class RegisterComponent implements OnInit {
  private router: Router = inject(Router);

  ngOnInit() {}

  redirigirLogin() {
    this.router.navigate(['/login']);
  }
}
