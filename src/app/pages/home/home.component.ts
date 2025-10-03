import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SharedIonicModule } from 'src/app/shared-ionic.module';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [CommonModule, SharedIonicModule],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
