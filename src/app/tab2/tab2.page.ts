import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonContent } from '@ionic/angular/standalone';
import { api } from 'src/lib/api';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  imports: [IonContent, CommonModule]
})
export class Tab2Page implements OnInit {
  countries: any[] = [];

  constructor() { }

  fetchCountries = async () => {
    try {
      const response = await api.get('country/')
      console.log(response.data)
      this.countries = response.data;
    } catch (error) {
      console.error('Error fetching countries:', error);
    }
  }

  ngOnInit(): void {
    this.fetchCountries()
  }
}
