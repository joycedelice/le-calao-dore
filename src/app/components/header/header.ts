import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  isMobile = window.innerWidth < 768;
  isMenuOpen=false;
  activeLink='Accueil';
  links=['Accueil', 'Menu', 'Temoignages','Horaires','Contact'];

  toggleMenu(){
    this.isMenuOpen=!this.isMenuOpen;
  }
  setActive(link: string){
    this.activeLink=link;
    this.isMenuOpen=false;
    
  }
}
