import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {

  isMenuOpen = false; // Variable para controlar si el menú está abierto o cerrado

  toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen; // Cambiar el estado del menú al hacer clic en el botón de menú
  }
}
