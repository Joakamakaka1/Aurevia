import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormComponent } from 'src/app/components/form/form.component';
import { SharedIonicModule } from 'src/app/shared-ionic.module';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [FormComponent, SharedIonicModule, CommonModule],
})
export class LoginComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
