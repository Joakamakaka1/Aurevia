import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { star, starOutline, calendarOutline } from 'ionicons/icons';

@NgModule({
  exports: [IonicModule],
  imports: [IonicModule],
})
export class SharedIonicModule {
  constructor() {
    addIcons({
      star,
      'star-outline': starOutline,
      'calendar-outline': calendarOutline,
    });
  }
}
