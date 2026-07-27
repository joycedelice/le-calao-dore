import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  backgroundImage = 'images/hero-restaurant.jpg'; 
  title = 'Saveurs authentiques du Cameroun'; 
  subtitle = '15 ans de tradition culinaire à Douala';
}
