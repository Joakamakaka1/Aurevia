import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { SharedIonicModule } from 'src/app/shared-ionic.module';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [CommonModule, SharedIonicModule, RouterModule],
})
export class HomeComponent implements OnInit {

  private router: Router = inject(Router);

  ngOnInit() { }

  redirigirLogin() {
    this.router.navigate(['/login']);
  }

  redirigirRegister() {
    this.router.navigate(['/register']);
  }
}
