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
export class RegisterComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
